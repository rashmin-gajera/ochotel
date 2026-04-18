// Simple Vercel serverless function to serve submissions for the OC Hotel app.
// - GET  /api/submissions  -> returns { records: [...] }
// - POST /api/submissions  -> accepts { type, payload } and appends a record
//
// Warning: Vercel deployments have ephemeral filesystem. Writing to the
// repository files (backend/data/submissions.json) may work during local
// development but will not be durable on Vercel production. For production
// you should use a database or external storage.

const fs = require('fs');
const path = require('path');

const DATA_PATH = path.resolve(process.cwd(), 'backend', 'data', 'submissions.json');

function safeRead() {
  try {
    const raw = fs.readFileSync(DATA_PATH, 'utf8');
    return JSON.parse(raw || '{"records":[]}');
  } catch (err) {
    return { records: [] };
  }
}

function tryWrite(dataObj) {
  try {
    fs.writeFileSync(DATA_PATH, JSON.stringify(dataObj, null, 2), 'utf8');
    return { ok: true, path: DATA_PATH };
  } catch (err) {
    // fallback to /tmp (ephemeral during runtime) for environments where
    // the deployment is read-only (typical on many serverless hosts).
    try {
      const tmp = path.join('/tmp', 'submissions.json');
      fs.writeFileSync(tmp, JSON.stringify(dataObj, null, 2), 'utf8');
      return { ok: true, path: tmp, note: 'wrote to /tmp (ephemeral)' };
    } catch (e) {
      return { ok: false, error: e.message };
    }
  }
}

module.exports = (req, res) => {
  res.setHeader('Content-Type', 'application/json');

  if (req.method === 'GET') {
    const store = safeRead();
    res.statusCode = 200;
    res.end(JSON.stringify({ records: store.records || [] }));
    return;
  }

  if (req.method === 'POST') {
    // Read raw body (this environment doesn't auto-parse)
    let body = '';
    req.on('data', (chunk) => { body += chunk; });
    req.on('end', () => {
      let parsed;
      try {
        parsed = body ? JSON.parse(body) : {};
      } catch (err) {
        res.statusCode = 400;
        res.end(JSON.stringify({ error: 'Invalid JSON body' }));
        return;
      }

      const { type, payload } = parsed;
      if (!type || !payload) {
        res.statusCode = 400;
        res.end(JSON.stringify({ error: 'Missing "type" or "payload" in request body' }));
        return;
      }

      const store = safeRead();
      store.records = store.records || [];
      const record = {
        id: `r_${Date.now()}_${Math.floor(Math.random() * 10000)}`,
        type,
        payload,
        createdAt: new Date().toISOString(),
      };

      // Prepend to keep newest first (matches admin UI expectation)
      store.records.unshift(record);

      const result = tryWrite(store);
      if (!result.ok) {
        res.statusCode = 503;
        res.end(JSON.stringify({ error: 'Unable to persist submission in this environment', details: result.error }));
        return;
      }

      res.statusCode = 201;
      res.end(JSON.stringify({ ok: true, record, savedAt: result.path, note: result.note || null }));
    });

    return;
  }

  res.statusCode = 405;
  res.setHeader('Allow', 'GET, POST');
  res.end(JSON.stringify({ error: 'Method not allowed' }));
};
