import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const askQuestion = async () => {
    if (!question.trim()) return;

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/chat`,
    {
        question,
    }
);

      setAnswer(res.data.answer);
    } catch (error) {
      setAnswer("Unable to connect to backend.");
    }
  };

  return (
    <div className="container">

      <h1 className="title">
        🤖 HR Chatbot
      </h1>

      <textarea
        className="textbox"
        rows="6"
        placeholder="Ask anything..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <button className="btn" onClick={askQuestion}>
        Ask Question?
      </button>

      <div className="answer-box">

        <h2>Answer</h2>

        <p>{answer || "Your answer will appear here..."}</p>

      </div>

    </div>
  );
}

export default App;
