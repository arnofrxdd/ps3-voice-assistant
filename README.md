# PS3 Voice Assistant 🎮🗣️

A **React-based**, voice-controlled assistant for the PlayStation 3 that connects **webMAN MOD** with **Gemini AI**.  
Run it on **any device** (PC, laptop, phone, tablet) in your browser — as long as it can reach your PS3 on the network.

Examples you can say:

- “Hey PlayStation, **play God of War 2**”
- “Hey PlayStation, **mount Black Ops 2**”
- “Hey PlayStation, **what’s my temperature?**”
- “Hey PlayStation, **set fan to 60%**”
- “Hey PlayStation, **exit game**”

The assistant analyzes your voice, asks Gemini for intent + best matching game, then sends the correct commands to webMAN.

---

## ✨ Features

### 🎙️ Hands-free control
- Wake words: `Hey PlayStation`, `Hey PS`, `PlayStation assistant`, `PS3`, etc.  
- Natural-language commands for games, temps, fans, system info, and more.

### 🎮 Intelligent game detection (via Gemini)
- Fuzzy matching for vague requests (“cod with Menendez and Mason” → **BO2**)  
- Collection detection (“play GoW2” → **God of War Collection**)  
- Only uses games actually detected from webMAN (never invents titles)

### 💿 Full webMAN integration
- Mount: `/mount.ps3/...`  
- Play: `/play.ps3/...`  
- Exit: `/xmb.ps3$exit`

### 🌡️ Temperature & fan control
Reads from `/cpursx.ps3` and supports:
- “CPU temp”, “PS3 temperature”, “RSX temp”  
- “set fan to 60%”, “target temp 65”, “auto/manual/dynamic/syscon fan mode”

### 🧠 Smart conflict handling
If a game is already running and you ask to play a different one:
- Gemini returns `game_conflict`
- Assistant tells you to **exit first**.

### 🔊 Voice feedback
Uses browser Text-to-Speech to respond:
- “Launching Black Ops 2, enjoy the warfare!”
- “CPU is at 63°C and RSX is at 60°C.”

### 🌀 Minimal, clean UI
A simple orb interface with status text and voice indicators.  
Tap to start → then speak.

---

## 🧱 Project Structure

```text
ps3-voice-assistant/
├─ ps3-webman-frontend/   # React app (voice UI + webMAN integration)
│  ├─ src/
│  │  └─ App.js           # Assistant logic + speech recognition
│  │  └─ setupProxy.js    # Proxies /ps3 → your PS3 IP
│  └─ ...
└─ gemini-server/         # Node.js backend for Gemini API
   ├─ gemini.js
   └─ ...
```


## 🚀 How to Run

### 1️⃣ Start the Gemini server
```bash
cd gemini-server
npm install
node gemini.js
```
Ensure your GEMINI_API_KEY is set.

### 2️⃣ Configure your PS3 IP

Edit `ps3-webman-frontend/src/setupProxy.js`:

```
target: "http://YOUR_PS3_IP_HERE"
```

3️⃣ Start the React app
```
cd ps3-webman-frontend
npm install
npm start
Open in browser:
http://localhost:3000
```

Works on any device that can access your PS3.
## ⚠️ Known Issues

This is early-stage and still experimental:

- Sometimes CPU/RSX temps show **unknown**
- WebMAN HTML parsing isn’t perfect
- Some intents may misinterpret vague commands
- Gemini prompts still need refining for full reliability
- System info occasionally fails to parse
- Speech recognition accuracy varies across browsers

If you run into bugs — you’re not alone. There’s plenty to improve.

---
## 🙌 Credits

- **webMAN MOD** by [aldostools](https://github.com/aldostools/webman-mod/)  
  This project depends on webMAN MOD for all PS3 HTTP/game control.

## 🤝 Want to Help?

This is a personal passion project that’s actively evolving.  
If you want to help:

- Improve game detection  
- Fix temperature parsing  
- Clean/refactor logic  
- Add new webMAN features  
- Improve prompt engineering  
- Or create a more advanced version…

I’d **love** to collaborate.  
Open an issue, submit a PR, or reach out — happy to build this together ❤️

Enjoy talking to your PS3! 😄

