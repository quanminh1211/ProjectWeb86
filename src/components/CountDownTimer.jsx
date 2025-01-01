import './CountDownTimer.css'
import React, { useState, useEffect } from "react";


function CountDownTimer() {
  // Set the target time (e.g., 3 days from now)
  const targetTime = new Date().getTime() + 3 * 24 * 60 * 60 * 1000;

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // Function to calculate the time difference
  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = targetTime - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval
  }, []);

  return (
      <div className="countdown-container">
        <div className="time-box">
          <span className="time">{timeLeft.days}</span>
          <span className="label">Days</span>
        </div>
        <div className="time-box">
          <span className="time">{timeLeft.hours}</span>
          <span className="label">Hours</span>
        </div>
        <div className="time-box">
          <span className="time">{timeLeft.minutes}</span>
          <span className="label">Minutes</span>
        </div>
        <div className="time-box">
          <span className="time">{timeLeft.seconds}</span>
          <span className="label">Seconds</span>
        </div>
      </div>
      

  )
  
}

export default CountDownTimer;
