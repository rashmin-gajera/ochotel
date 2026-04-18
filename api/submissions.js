import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI);

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');

  await client.connect();
  const col = client.db('oc_hotel').collection('submissions');

  if (req.method === 'GET') {
    const records = await col.find().sort({ createdAt: -1 }).toArray();
    return res.status(200).json({ records });
  }

  if (req.method === 'POST') {
    const { type, payload } = req.body;
    if (!type || !payload) {
      return res.status(400).json({ error: 'Missing "type" or "payload"' });
    }

    const record = { type, payload, createdAt: new Date().toISOString() };
    const result = await col.insertOne(record);
    return res.status(201).json({ ok: true, record: { ...record, id: result.insertedId } });
  }

  res.setHeader('Allow', 'GET, POST');
  return res.status(405).json({ error: 'Method not allowed' });
}