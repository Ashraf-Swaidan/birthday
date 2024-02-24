import React, { useState } from 'react';
import Confetti from 'react-confetti';
import './App.css'; 

const BirthdayCard = ({ name }) => {
  return (
    <div className="birthday-card">
       <Confetti />
      <div className="left-side">
 
        <img src="gift.png" />
      </div>
      <div className="right-side">
        {/* Customize birthday message with the user's name */}
        <h2>Happy Birthday, {name}!</h2>
        <p>Wishing you all the best on your special day!</p>
        <p>Goodluck at your graduation project as well~</p>
      </div>
    </div>
  );
};

const App = () => {
  const [userName, setUserName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    playBirthdaySong();
  };


  const playBirthdaySong = () => {
    const audio = new Audio('lullaby.wav'); // Path to your audio file
    audio.play();
  };

  return (
    <div className="app">
      {!submitted ? (
        <div className="initial-page">
          {/* Gradient background */}
          <div className="background"></div>
          
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter your name buddy"
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      ) : (
        <BirthdayCard name={userName} />
      )}
    </div>
  );
};

export default App;
