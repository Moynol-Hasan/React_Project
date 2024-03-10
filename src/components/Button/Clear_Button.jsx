import React, { useEffect, useState } from "react";


const Clear_Button = ({isClicked}) => {


  const [clicked, setClicked] = useState(false);

  
  
  const handleClear = () => {
    localStorage.clear();
    isClicked(true);
    // window.location.reload(true);
  };

  // useEffect(() => {
  //   if (clicked) {
  //     localStorage.clear();
  //     isClicked(clicked)
  //     setClicked(false);
  //   }
  // }, [clicked]);
  
  return (
    <div>
      <button className="initial-btn" onClick={handleClear}>
        Clear Cache
      </button>
    </div>
  );
};

export default Clear_Button;






//   const [clicked, setClicked] = useState(false);

//   useEffect(() => {
//     if (clicked) {
//       localStorage.clear();
//       setClicked(true);
//     }
//   }, [clicked]);

