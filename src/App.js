import React from 'react';
import './App.css';

function App() {
  return (
    <div className="bg-gray-900 min-h-screen text-white p-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold">[Your Name]</h1>
        <p className="text-lg mt-2">Data Scientist | MBA Candidate | AI Strategist</p>
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold border-b pb-2 mb-4">📁 Projects</h2>
        <ul className="space-y-4">
          <li>
            <h3 className="text-xl font-semibold">Audi – After-sales Analytics</h3>
            <p>Parts inventory optimization, repurchase behavior modeling, and merchandise recommendation system for after-sales.</p>
          </li>
          <li>
            <h3 className="text-xl font-semibold">Sarita Handa – On-Time Delivery Prediction</h3>
            <p>Forecasting delivery delays and improving OTD through ML on 6000+ annual export orders.</p>
          </li>
          <li>
            <h3 className="text-xl font-semibold">GenAI Notetaker for Prysm</h3>
            <p>Meeting bot to transcribe, summarize, extract action items, and email notes via GenAI integration.</p>
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold border-b pb-2 mb-4">🧠 Skills</h2>
        <p>Python, SQL, Power BI, TensorFlow, LLMs, Prompt Engineering, Supply Chain Analytics, NLP, MLOps</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold border-b pb-2 mb-4">📫 Contact</h2>
        <p>Email: your.email@example.com</p>
        <p>LinkedIn: linkedin.com/in/yourprofile</p>
      </section>
    </div>
  );
}

export default App;
