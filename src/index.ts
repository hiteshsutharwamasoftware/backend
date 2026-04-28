import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.get('/api/items', (_req, res) => {
  res.json({ items: [] });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
