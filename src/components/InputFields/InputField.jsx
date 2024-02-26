import React, { useState } from "react";
import SelectField from "./SelectField";
import axios from "axios";

const InputField = () => {
  const url = "http://192.168.12.79:8080/api/products/create"

  const [myVal,setMyval] = useState([]);

  const [user, setUser] = useState({
    label: "",
    field_value:[],
    field_type: "Text",
    possible: [{}]
  });

  const [submitting, setSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleValueTypeChange = (selectedValue) => {
    setUser({ ...user, field_type: selectedValue });
  };

  const handleFieldValueChange = (value) => {
    setUser({ ...user, field_value: value });
  };

const handlePossibleValuesChange = (values) => {
  const selectedValues = values.filter(({ isChecked }) => isChecked).map(({ value }) => value);
  setUser((prevUser) => ({
    ...prevUser,
    field_value: selectedValues,
    possible: values, // Update possible values as well
  }));
};
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    setSubmitting(true);

    axios.post(url, user).then((res) => {
      console.log(res);
    });

    setUser({
      label: "",
      field_value: "",
      field_type: "Text",
      possible: [],
    });

    setMyval([]);

    setTimeout(() => {
      setSubmitting(false);
    }, 1000);
  };

  return (
    <>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="field">
          <label>Create Label</label>
          <input
            type="text"
            name="label"
            value={user.label}
            id="label"
            onChange={handleInputChange}
            required
          />
        </div>

        <SelectField
          onValueTypeChange={handleValueTypeChange}
          onFieldValueChange={handleFieldValueChange}
          onPossibleValuesChange={handlePossibleValuesChange}
          clearFieldValue={submitting}
        />

      <div>
          {/* Displaying myVal values as a list */}
          <ul>
            {myVal.map((value, index) => (
              <li key={index}>{value}</li>
            ))}
          </ul>
        </div>

        <button className="initial-btn" disabled={submitting}>
          {submitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </>
  );
};

export default InputField;



// const handlePossibleValuesChange = (values) => {
//   const selectedValues = values.filter(({ isChecked }) => isChecked).map(({ value }) => value);
//   setUser((prevUser) => ({
//     ...prevUser,
//     field_value: selectedValues,
//     possible: values, // Update possible values as well
//   }));
// };