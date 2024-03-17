import React, { useEffect, useState } from "react";

const Clear_Button = ({isClicked}) => {

  const [clicked, setClicked] = useState(false);

  const handleClear = () => {
    localStorage.clear();
    isClicked(true);
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