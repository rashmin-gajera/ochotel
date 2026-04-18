import express from 'express';
import cors from 'cors';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import crypto from 'crypto';

const app = express();
const PORT = process.env.PORT || 4000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.join(__dirname, 'data', 'submissions.json');

app.use(cors());
app.use(express.json());

async function readDb() {
  try {
    const raw = await fs.readFile(dbPath, 'utf8');
    return JSON.parse(raw || '[]');
  } catch {
    return [];
  }
}

async function writeDb(records) {
  await fs.writeFile(dbPath, JSON.stringify(records, null, 2));
}

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'OC Hotel backend' });
});

app.get('/api/submissions', async (_req, res) => {
  const records = await readDb();
  res.json({ records: records.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) });
});

app.post('/api/submissions', async (req, res) => {
  const { type, payload } = req.body || {};

  if (!['checkin', 'checkout'].includes(type) || !payload || typeof payload !== 'object') {
    return res.status(400).json({ error: 'Invalid submission' });
  }

  const records = await readDb();
  const record = {
    id: crypto.randomUUID(),
    type,
    payload,
    createdAt: new Date().toISOString(),
  };

  records.push(record);
  await writeDb(records);
  return res.status(201).json({ message: 'Saved', record });
});

app.listen(PORT, () => {
  console.log(`OC Hotel backend running on http://localhost:${PORT}`);
});
