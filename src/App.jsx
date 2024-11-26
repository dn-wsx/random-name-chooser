import { useState } from "react";
import "./App.css";
import UploadButton from "./components/UploadButton";
import Winners from "./components/Winners";
import FloatingNames from "./components/FloatingNames";
import ShowWinners from "./components/ShowWinners";

function App() {
  const [isUploaded, setIsUploaded] = useState(false);
  const [showWinners, setShowWinners] = useState(false);
  const [names, setNames] = useState([]);
  const [winners, setWinners] = useState([]);

  const handleUpload = (uploadedNames) => {
    setNames(uploadedNames);
    setIsUploaded(true);
  };

  const handleShowWinners = (selectedWinners) => {
    setWinners(selectedWinners);
    setShowWinners(true);
  };

  const handleBack = () => {
    setShowWinners(false);
  };

  const getRandomNames = (n) => {
    const shuffled = [...names].sort(() => 0.5 - Math.random());
    const selectedWinners = shuffled.slice(0, n);
    setNames(names.filter((name) => !selectedWinners.includes(name)));
    return selectedWinners;
  };

  return (
    <>
      <div className="black">
        <div className="box">
          {!isUploaded && (
            <div className="form">
              <UploadButton onUpload={handleUpload} />
            </div>
          )}
          {isUploaded && !showWinners && (
            <>
              <FloatingNames names={names} />
              <div className="form">
                <Winners
                  getRandomNames={getRandomNames}
                  names={names}
                  onShowWinners={handleShowWinners}
                />
              </div>
            </>
          )}
          {showWinners && <ShowWinners winners={winners} onBack={handleBack} />}
        </div>
      </div>
    </>
  );
}

export default App;
