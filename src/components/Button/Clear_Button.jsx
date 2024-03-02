import React from "react";

const Clear_Button = () => {

  const handleClear = () => {
    localStorage.clear();
  };

  return (
    <div>
      <button className="initial-btn" onClick={handleClear}>
        Clear Cache
      </button>
    </div>
  );
};

export default Clear_Button;
