 let records = [];

export default async function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json({ records });
  }

  if (req.method === 'POST') {
    const { type, payload } = req.body || {};

    const record = {
      id: Date.now(),
      type,
      payload,
      createdAt: new Date().toISOString(),
    };

    records.unshift(record);

    return res.status(200).json({ success: true, record });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}