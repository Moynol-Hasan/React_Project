import { useState } from "react";
import InputField from '../InputFields/InputField';

const Button = () => {
    const [click,setClick] = useState(false);
  return (
    <>
      <div className="container">
        <button className="initial-btn" onClick={() => setClick(true)}>
          Add
        </button>
        {click ? <InputField/> : null}
      </div>
    </>
  );
};

export default Button;
