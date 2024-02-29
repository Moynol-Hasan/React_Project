import React, { useState } from "react";
import SelectField from "./SelectField";

const InputField = () => {

  let [user, setUser] = useState({
    label: "",
    field_slug: "",
    field_value: "",
    field_type: "Text",
    possible: [],
  });

  const [myVal, setMyval] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [submit, setSubmit] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleValueTypeChange = (selectedValue) => {
    setUser({ ...user, field_type: selectedValue });
  };

  const handleFieldValueChange = (value) => {
    const fieldValue =
      Array.isArray(value) && value.length > 1 ? value : value[0] || "";
    setUser({ ...user, field_value: fieldValue });
  };

  const handlePossibleValuesChange = (values) => {
    const selectedValues = values
      .filter(({ isChecked }) => isChecked)
      .map(({ key }) => key);
    const selectedPossibleValues = values.map(({ key, value }) => ({
      key,
      value,
    }));

    setMyval(selectedValues);
    setUser((prevUser) => ({
      ...prevUser,
      field_value: selectedValues,
      possible: selectedPossibleValues,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    let key = user.label;
    key = key.replace(/ /g, "_");

    const updatedUser = {
      ...user,
      field_slug: key,
    };

    console.log(updatedUser);

    // Retrieve existing data from local storage
    const existingData = JSON.parse(localStorage.getItem("userData")) || [];

    // Update the array with the new value
    const updatedData = [...existingData, updatedUser];

    // Store updated data in local storage
    localStorage.setItem("userData", JSON.stringify(updatedData));

    // localStorage.clear();

    // Reset form fields and state
    setUser({
      label: "",
      field_slug: "",
      field_value: "",
      field_type: "Text",
      possible: [],
    });

    setMyval([]);
    setSubmit(true);

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
          onFormSubmit={submit}
          // setFieldType={user.field_type}
        />

        <div>
          <ul className="selected-value">
            {myVal.map((value, index) => (
              <li key={index}>{value}
              {index !== myVal.length - 1 && ","}
              </li>
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
