import React, { useState } from "react";

const Winners = ({ getRandomNames, names, onShowWinners }) => {
  const [numberOfWinners, setNumberOfWinners] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const selectedWinners = getRandomNames(numberOfWinners);
    onShowWinners(selectedWinners);
  };

  return (
    <div>
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
    </div>
  );
};

export default Winners;
