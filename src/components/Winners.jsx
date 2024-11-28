import React, { useState } from "react";

const Winners = ({ getRandomNames, names, onShowWinners }) => {
  const [numberOfWinners, setNumberOfWinners] = useState();
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (numberOfWinners <= 0) {
      setError("Number of winners must be greater than zero.");
      return;
    }
    setError("");
    const selectedWinners = getRandomNames(numberOfWinners);
    onShowWinners(selectedWinners);
  };

  return (
    <div className="winners_container">
      <form onSubmit={handleSubmit} className="input_number">
        <div className="number_of_winners">
          <label htmlFor="number">NUMBER OF WINNERS:</label>
          <input
            type="number"
            name="number"
            id="number"
            value={numberOfWinners}
            onChange={(e) => setNumberOfWinners(parseInt(e.target.value, 10))}
          />
        </div>
        <button type="submit">GO</button>
      </form>
      {error && <div className="error_message">{error}</div>}
    </div>
  );
};

export default Winners;
