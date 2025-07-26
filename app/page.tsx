'use client';

import { useState } from 'react';

export default function Home() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const askQuestion = async () => {
    setLoading(true);
    setError('');
    setAnswer('');

    try {
      const res = await fetch('http://localhost:8000/answer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.detail || 'Something went wrong');
      }

      setAnswer(data.answer);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-xl">
        <h1 className="text-3xl font-bold text-center mb-6">AI Q&A Assistant</h1>

        <textarea
          className="w-full border rounded-md p-3 text-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          rows={4}
          placeholder="Ask me anything..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

        <button
          onClick={askQuestion}
          disabled={loading || !question.trim()}
          className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? 'Thinking...' : 'Ask'}
        </button>

        {answer && (
          <div className="mt-6 bg-white p-4 rounded-md shadow">
            <h2 className="font-semibold text-gray-700">Answer:</h2>
            <p className="mt-2 text-gray-800">{answer}</p>
          </div>
        )}

        {error && (
          <div className="mt-6 text-red-600 font-semibold">
            ⚠️ {error}
          </div>
        )}
      </div>
    </main>
  );
}
