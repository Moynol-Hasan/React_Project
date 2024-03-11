import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Clear_Button from "../Button/Clear_Button";

const List = () => {
  const [updatedUser, setUpdatedUser] = useState([]);

  let clickbtn =false;

  const click = (isClicked) =>{
    if(isClicked) setUpdatedUser([]);
  }

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("userData"));
    if (storedUser) {
      setUpdatedUser(storedUser);
    }
  }, []);
  

  return (
    <>
      <Navbar />
      <h2 className="userDataCaption">User Data</h2>

      <div className="json-list">
        <pre>{JSON.stringify(updatedUser, null, 2)}</pre>
        <Clear_Button isClicked={click} />
      </div>
    </>
  );
};

export default List;
