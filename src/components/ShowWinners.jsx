import React, { useEffect, useState } from "react";
import "./ShowWinners.css";

const ShowWinners = ({ winners, onBack }) => {
  const [visibleWinners, setVisibleWinners] = useState([]);
  const [showBackButton, setShowBackButton] = useState(false);

  useEffect(() => {
    const timeouts = [];

    winners.forEach((winner, index) => {
      const timeout = setTimeout(() => {
        setVisibleWinners((prev) => [...prev, winner]);
        if (index === winners.length - 1) {
          setTimeout(() => setShowBackButton(true), 3000); // Show the back button 3 seconds after the last winner
        }
      }, index * 3000);
      timeouts.push(timeout);
    });

    return () => {
      timeouts.forEach(clearTimeout); // Clear all timeouts on cleanup
    };
  }, [winners]);

  return (
    <div className="show_winners">
      {visibleWinners.map((winner, index) => (
        <div key={index} className="winner_name fade-in">
          {winner}
        </div>
      ))}
      {showBackButton && (
        <button className="back_button fade-in" onClick={onBack}>
          AGAIN
        </button>
      )}
    </div>
  );
};

export default ShowWinners;
