// server.js
import express from "express";
import cors from "cors";
import { GoogleGenerativeAI } from "@google/generative-ai";

const app = express();
app.use(cors());
app.use(express.json());

// Initialize Gemini client
const genAI = new GoogleGenerativeAI("YOUR GEMINI API KEY");

// Chat endpoint
app.post("/api/chat", async (req, res) => {
    const { prompt } = req.body;

    // Log received request
    console.log("📥 RECEIVED REQUEST:");
    console.log("   Prompt:", prompt);
    console.log("   Timestamp:", new Date().toISOString());

    try {
        // Use Gemini 2.0 Flash-Lite model
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

        console.log("🔄 Calling Gemini API...");

        // Generate content
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const responseText = response.text();

        // Log API response
        console.log("📤 SENDING RESPONSE:");
        console.log("   AI Response:", responseText);
        console.log("   Response length:", responseText.length, "characters");
        console.log("---");

        res.json({ text: responseText });
    } catch (err) {
        console.error("❌ Gemini API error:", err.message);
        console.log("---");
        res.status(500).json({ error: "Gemini API error" });
    }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Gemini AI running on port ${PORT}`));