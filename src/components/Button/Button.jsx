import { useState } from "react";
import InputField from '../InputFields/InputField';
import Navbar from "../Navbar/Navbar";

const Button = () => {
    const [click,setClick] = useState(false);
  return (
    <>
    <Navbar/>
      <div className="container">
        <button className="initial-btn" onClick={() => setClick(!click)}>
          Add
        </button>
        {click ? <InputField/> : null}
      </div>
    </>
  );
};

export default Button;
