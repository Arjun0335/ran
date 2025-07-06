import { useState } from 'react';

const loveQuotes = [
  "I love you not only for what you are, but for what I am when I am with you.",
  "Every love story is beautiful, but ours is my favorite.",
  "You are the source of my joy, the center of my world and the whole of my heart.",
];

export function Quotes() {
  const [quote, setQuote] = useState('');

  const getQuote = () => {
    const random = loveQuotes[Math.floor(Math.random() * loveQuotes.length)];
    setQuote(random);
  };

  return (
    <div className="card">
      <h2>❤️ Random Love Quote</h2>
      <button onClick={getQuote}>Show me love 💘</button>
      <p>{quote}</p>
    </div>
  );
}
