import React, { useState, useEffect } from "react";
import SelectField from "./SelectField";

const InputField = ({ index, updateFormData, deleteForm }) => {
  const [user, setUser] = useState({
    label: "",
    field_slug: "",
    field_value: "",
    field_type: "Text",
    possible: [],
  });

  const [myVal, setMyval] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleValueTypeChange = (selectedValue) => {
    setUser((prevUser) => ({ ...prevUser, field_type: selectedValue }));
  };

  const handleFieldValueChange = (value) => {
    const fieldValue =
      Array.isArray(value) && value.length > 1 ? value : value[0] || "";
    setUser((prevUser) => ({ ...prevUser, field_value: fieldValue }));
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

  useEffect(() => {
    updateFormData(index, user);
  }, [index,user]);

  const handleDeleteForm = ()=>{
    deleteForm(index);
  }



  return (
    <div className="form-container">
      {index>0 ? <p className="delete-form-btn" onClick={handleDeleteForm}>&times;</p>:null}
      <div className="field">
        <label>Create Label</label>
        <input
          type="text"
          name="label"
          value={user.label}
          onChange={handleInputChange}
          required
        />
      </div>

      <SelectField
        onValueTypeChange={handleValueTypeChange}
        onFieldValueChange={handleFieldValueChange}
        onPossibleValuesChange={handlePossibleValuesChange}
      />

      <div>
        <ul className="selected-value">
          {myVal.map((value, index) => (
            <li key={index}>
              {value}
              {index !== myVal.length - 1 && ","}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InputField;
