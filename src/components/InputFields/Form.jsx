import React, { useState, useEffect } from "react";
import InputField from "./InputField";
import Navbar from "../Navbar/Navbar";

const Form = () => {
  const url = "http://192.168.12.79:8088/products/all";

  const [count, setCount] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState([]);

  const updateFormData = (index, userData) => {
    let key = userData.label.replace(/ /g, "_");

    const updatedUser = {
      ...userData,
      field_slug: key,
    };

    setFormData((prevData) => {
      const newData = [...prevData];
      newData[index] = updatedUser;
      return newData;
    });
  };

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  const deleteForm = (index) =>{
    setFormData((prevData) => prevData.filter((_, i) => i !== index));
    setCount((prevCount) => prevCount - 1);    
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
  
    // Retrieve existing data from local storage
    const existingData = JSON.parse(localStorage.getItem("userData")) || [];
  
    // Get the length of existing data to determine the new ID
    const newId = existingData.length + 1;
  
    // Add the ID to the form data
    const formWithId = {
      id: newId,
      data: formData,
    };
  
    // Concatenate existing data with the new form data
    const updatedData = existingData.concat(formWithId);
  
    // Store updated data in local storage
    localStorage.setItem("userData", JSON.stringify(updatedData));
  
    setTimeout(() => {
      setSubmitting(false);
      window.location.reload(false);
    }, 1000);
  };
  

  // axios.post(url)
  // .then((response) => console.log(response))
  // .catch((error) => console.log(error));

  return (
    <>
      <Navbar />
      <div className="container">
        <button className="initial-btn" onClick={handleButtonClick}>
          Add
        </button>
      </div>

      <form className="form-container container" onSubmit={handleSubmit}>
        <InputField updateFormData={updateFormData} index={0}/>
        {[...Array(count)].map((_, index) => (
          <InputField
            key={index}
            updateFormData={updateFormData}
            index={index + 1}
            deleteForm={deleteForm}
          />
        ))}

        <button className="initial-btn" disabled={submitting}>
          {submitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </>
  );
};

export default Form;
