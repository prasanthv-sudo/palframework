# AILA — Adaptive AI Literacy Assessment System
### Provisional Patent | FISAT Business School | Prasanth | 2026

A fully working browser-deployable demo of the **AILA multi-dimensional AI Literacy Scoring Engine**, implementing IRT 3-PL adaptive scoring, Behavioral Signal Processing (BSP), and Literacy Fingerprint Vector (LFV) generation across five PAL competency axes.

---

## 🚀 Quick Start (any machine with Node.js)

```bash
# 1. Install dependencies (one time)
npm install

# 2. Start the server
npm start

# 3. Open in your browser
#    http://localhost:3000
```

That's it. No build step. No bundler. No framework toolchain required.

---

## 🌐 Deployment Options

### Option A — Local / LAN Demo
```bash
npm start
# Share http://<your-IP>:3000 on the same Wi-Fi network
```

### Option B — Render.com (free tier, public URL in ~2 min)
1. Push this folder to a GitHub repository
2. Go to https://render.com → New → Web Service
3. Connect your repo
4. Build command: `npm install`
5. Start command: `npm start`
6. Done — Render gives you a public `https://` URL

### Option C — Railway.app (free tier)
```bash
npm install -g @railway/cli
railway login
railway init
railway up
# Public URL generated automatically
```

### Option D — Heroku
```bash
heroku create aila-scoring-engine
git push heroku main
heroku open
```

### Option E — VPS / Ubuntu Server
```bash
# Install Node.js if needed
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Clone/upload the folder, then:
npm install
npm start

# For production (keeps running after logout):
npm install -g pm2
pm2 start server.js --name aila
pm2 startup
pm2 save

# Optional: Nginx reverse proxy on port 80
# Proxy pass http://localhost:3000
```

### Option F — Docker
```bash
# Build
docker build -t aila-engine .

# Run
docker run -p 3000:3000 aila-engine

# Open http://localhost:3000
```

---

## 🔬 What the Engine Implements

| Component | Algorithm | Details |
|---|---|---|
| **CME** | 5-axis PAL Taxonomy | A1–A5 competency axes, 4 items each |
| **BSP** | Behavioral Signal Processor | Latency · Corrections · Hesitations → W_BSP |
| **ATG** | IRT 3-PL Adaptive Scoring | θ updated via EAP after each response |
| **SMES** | 20 calibrated items | a, b, c IRT parameters per item |
| **LFA** | Literacy Fingerprint Algorithm | LFV = θ × W_BSP per axis, decay λ=0.023 |
| **IRS** | Intervention Recommender | Gap-axis → spaced repetition modules (Day 1/3/7) |

## 📁 File Structure

```
aila-scoring-engine/
├── server.js          ← Express server (8 lines)
├── package.json       ← Dependencies
├── README.md          ← This file
└── public/
    └── index.html     ← Complete app (React + engine, no build step)
```

## 🔑 Port Configuration

Default port: **3000**

To change: `PORT=8080 npm start`

---

## 📋 Patent Context

This demo implements the core algorithms described in the AILA Provisional Patent Application:
- **Claim 1** system architecture (all 6 modules)
- **Claim 2** method (adaptive assessment pipeline)
- **Claim 4** temporal decay constant λ=0.023
- **Claim 5** IRT stopping rules (SEM < 0.30 / max 25 items)

© 2026 Prasanth, FISAT Business School. All rights reserved. Patent Pending.
