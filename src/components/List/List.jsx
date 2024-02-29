import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";

const List = () => {
  const [updatedUser, setUpdatedUser] = useState([]);

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
      <pre>{JSON.stringify(updatedUser, null, 2)}</pre>
    </>
  );
};

export default List;
