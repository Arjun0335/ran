import React from 'react';
import './App.css';
import { Gallery } from './Gallery';
import { LoveLetter } from './LoveLetter';
import { Music } from './Music';
import { Countdown } from './Countdown';
import { Quotes } from './Quotes';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>🌹 To My Love 💖</h1>
        <p>Every heartbeat of mine speaks your name...</p>
      </header>
      <Countdown />
      <LoveLetter />
      <Gallery />
      <Music />
      <Quotes />
      <footer className="footer">
        Made with ❤️ by Arjun
      </footer>
    </div>
  );
}

export default App;
