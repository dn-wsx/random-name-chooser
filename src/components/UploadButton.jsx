import React, { useRef } from "react";

const UploadButton = ({ onUpload }) => {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target.result;
        const names = content.split(",");
        onUpload(names);
      };
      reader.readAsText(file, "UTF-8"); // Ensure UTF-8 encoding
    }
  };

  return (
    <div className="upload_button">
      <button onClick={handleButtonClick}>Upload File</button>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileUpload}
        accept=".txt"
      />
    </div>
  );
};

export default UploadButton;
