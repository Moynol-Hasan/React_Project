import React, { useState } from "react";
import InputField from '../InputFields/InputField';
import Navbar from "../Navbar/Navbar";

const Button = () => {
    const [count, setCount] = useState(0);

    const handleButtonClick = () => {
        setCount(count + 1);
    };

    return (
        <>
            <Navbar/>
            <div className="container">
                <button className="initial-btn" onClick={handleButtonClick}>
                    Add
                </button>
                <InputField />
                {[...Array(count)].map((_, index) => (
                    <InputField key={index} />
                ))}
            </div>
        </>
    );
};

export default Button;
