const express = require('express');
const path    = require('path');
const app     = express();

app.use(express.static(path.join(__dirname, 'public')));

// Catch-all: serve index.html for any route
app.get('/{*splat}', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`\n  ✅  AILA server running`);
  console.log(`  🌐  Open:  http://localhost:${PORT}\n`);
});
