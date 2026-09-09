const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

async function askGemini(question) {
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: question,
        });

        return response.text;
    } catch (error) {
        console.error("Gemini Error:", error);
        return "Something went wrong while connecting to Gemini.";
    }
}

module.exports = askGemini;