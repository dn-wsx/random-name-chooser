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
        const arrayBuffer = e.target.result;
        const decoder = new TextDecoder("windows-1252");
        const content = decoder.decode(arrayBuffer);
        const names = content.split(",").map((name) => name.trim());
        onUpload(names);
      };
      reader.readAsArrayBuffer(file);
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
