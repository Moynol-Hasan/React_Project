import React, { useState } from "react";
import InputField from "./InputField";
import Navbar from "../Navbar/Navbar";

const Form = () => {
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
  // console.log(userData);

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    setSubmitting(true);

    console.log(formData);
    //  let key = formData.label;
    //  key = key.replace(/ /g, "_");

    // const updatedUser = {
    //   ...formData,
    //   field_slug: key,
    // };

    // console.log(updatedUser);

    // Retrieve existing data from local storage
    const existingData = JSON.parse(localStorage.getItem("userData")) || [];

    // Concatenate existing data with current form data
    const updatedData = existingData.concat([formData]);

    // Store updated data in local storage as an array
    localStorage.setItem("userData", JSON.stringify(updatedData));

    // // localStorage.clear();
    // setFormData([]);

    window.location.reload(false);

    // // Reset form fields and state
    // setUser({
    //   label: "",
    //   field_slug: "",
    //   field_value: "",
    //   field_type: "Text",
    //   possible: [],
    // });

    // setMyval([]);
    // setSubmit(true);

    setTimeout(() => {
      setSubmitting(false);
    }, 1000);
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <button className="initial-btn" onClick={handleButtonClick}>
          Add
        </button>
      </div>

      <form className="form-container container" onSubmit={handleSubmit}>
        <InputField updateFormData={updateFormData} index={0} />
        {[...Array(count)].map((_, index) => (
          <InputField
            key={index}
            updateFormData={updateFormData}
            index={index + 1}
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
