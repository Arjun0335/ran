import { useState, useEffect } from 'react';

export function Countdown() {
  const target = new Date('2025-02-14'); // Example: Valentine's Day
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = target - now;
      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({ done: true });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60)
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [target]);

  return (
    <div className="card">
      <h2>⏳ Countdown to Our Special Day</h2>
      {timeLeft.done ? <p>💖 It's Today! 💖</p> :
        <p>{timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s</p>}
    </div>
  );
}
