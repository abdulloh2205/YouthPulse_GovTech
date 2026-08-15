require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { youthProfiles, computeStats } = require('./mockData');
const { handleAiChat } = require('./controllers/aiController');

const app = express();
const PORT = process.env.PORT || 3000;

const allowedOrigins = (process.env.FRONTEND_URLS || '')
  .split(',')
  .map((o) => o.trim())
  .filter(Boolean)
  .concat([
    'http://127.0.0.1:5500',
    'http://localhost:5500',
    'http://127.0.0.1:5173',
    'http://localhost:5173',
    'http://localhost:3000',
    'null',
  ]);

app.use(
  cors({
    origin: (origin, callback) => {

      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error(`CORS: ${origin} manziliga ruxsat yo'q`));
      }
    },
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  })
);

app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));

app.use((req, _res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

app.get('/api/health', (_req, res) => {
  res.json({
    success: true,
    status: 'ok',
    service: 'YouthPulse Backend',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
    aiMode: process.env.AI_MODE || 'mock',
    port: PORT,
  });
});

app.get('/api/youth', (req, res) => {
  try {
    let data = [...youthProfiles];

    const { mahalla, status, gender, needsSupport, search, page = 1, limit = 10 } = req.query;

    if (mahalla) {
      data = data.filter((y) => y.mahalla.toLowerCase() === mahalla.toLowerCase());
    }
    if (status) {
      data = data.filter((y) => y.status === status);
    }
    if (gender) {
      data = data.filter((y) => y.gender === gender);
    }
    if (needsSupport !== undefined) {
      const ns = needsSupport === 'true';
      data = data.filter((y) => y.needsSupport === ns);
    }
    if (search) {
      const q = search.toLowerCase();
      data = data.filter((y) => y.fullName.toLowerCase().includes(q) || y.id.toLowerCase().includes(q));
    }

    const total = data.length;
    const pageNum = Math.max(1, parseInt(page, 10));
    const limitNum = Math.min(50, Math.max(1, parseInt(limit, 10)));
    const start = (pageNum - 1) * limitNum;
    const paged = data.slice(start, start + limitNum);

    res.json({
      success: true,
      total,
      page: pageNum,
      limit: limitNum,
      totalPages: Math.ceil(total / limitNum),
      data: paged,
    });
  } catch (error) {
    console.error('[/api/youth Error]', error);
    res.status(500).json({ success: false, error: 'Ma\'lumotlarni olishda xato yuz berdi' });
  }
});

app.get('/api/youth/:id', (req, res) => {
  const profile = youthProfiles.find((y) => y.id === req.params.id);
  if (!profile) {
    return res.status(404).json({ success: false, error: `Y${req.params.id} ID bilan yosh topilmadi` });
  }
  res.json({ success: true, data: profile });
});

app.get('/api/stats', (_req, res) => {
  try {
    const stats = computeStats();
    res.json({ success: true, data: stats });
  } catch (error) {
    console.error('[/api/stats Error]', error);
    res.status(500).json({ success: false, error: 'Statistikani hisoblashda xato' });
  }
});

app.get('/api/mahallas', (_req, res) => {
  const { byMahalla } = computeStats();
  const mahallas = Object.entries(byMahalla).map(([name, count]) => {
    const youthInMahalla = youthProfiles.filter((y) => y.mahalla === name);
    const neetCount = youthInMahalla.filter((y) => y.status === 'neet').length;
    const needsSupportCount = youthInMahalla.filter((y) => y.needsSupport).length;
    return { name, total: count, neetCount, needsSupportCount };
  });
  res.json({ success: true, data: mahallas });
});

app.post('/api/ai/chat', handleAiChat);

app.use((_req, res) => {
  res.status(404).json({
    success: false,
    error: 'Endpoint topilmadi',
    hint: 'GET /api/health — server holati tekshiruvi',
  });
});

app.use((err, _req, res, _next) => {
  console.error('[Global Error]', err.message);
  res.status(500).json({
    success: false,
    error: err.message || 'Ichki server xatosi',
  });
});

app.listen(PORT, () => {
  console.log('');
  console.log('  ⚡ YouthPulse Backend Server');
  console.log(`  🌐 http://localhost:${PORT}`);
  console.log(`  🔍 Health: http://localhost:${PORT}/api/health`);
  console.log(`  🤖 AI Mode: ${process.env.AI_MODE || 'mock'}`);
  console.log('');
});

module.exports = app;

