const express = require('express');
const path = require('path');

const app = express();
app.use(express.json({ limit: '6mb' }));
app.use(express.static(path.join(__dirname, 'public')));

// In-memory storage: { roomCode: [ {id, sender, text, image, ts}, ... ] }
const rooms = {};

function sanitizeCode(raw) {
  return String(raw || '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\-_. ]/gi, '')
    .slice(0, 60) || 'xona';
}

app.get('/api/rooms/:code/messages', (req, res) => {
  const code = sanitizeCode(req.params.code);
  res.json(rooms[code] || []);
});

app.post('/api/rooms/:code/messages', (req, res) => {
  const code = sanitizeCode(req.params.code);
  const { sender, text, image } = req.body || {};

  if (!sender || (!text && !image)) {
    return res.status(400).json({ error: 'sender va text yoki image kerak' });
  }

  const msg = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 8),
    sender: String(sender).slice(0, 24),
    text: text ? String(text).slice(0, 2000) : '',
    image: image || null,
    ts: Date.now()
  };

  if (!rooms[code]) rooms[code] = [];
  rooms[code].push(msg);
  if (rooms[code].length > 200) rooms[code] = rooms[code].slice(-200);

  res.json(msg);
});

app.delete('/api/rooms/:code/messages', (req, res) => {
  const code = sanitizeCode(req.params.code);
  delete rooms[code];
  res.json({ ok: true });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Maxfiy suhbat server running on port ' + PORT));
