import React, { useState,useEffect } from "react";

const KeyValue = ({ onClose, onPossibleValuesChange }) => {
    
  const [inputFields, setInputFields] = useState([{ key: "", value: "", isChecked: false }]);
  const [checkedValues, setCheckedValues] = useState([]);

  const handleAddFields = (e) => {
    e.preventDefault();
    setInputFields([...inputFields, { key: "", value: "", isChecked: false }]);
  };

  const handleInputChange = (index, e) => {
    const { name, value, type, checked } = e.target;
    const newInputFields = [...inputFields];
    if (type === "checkbox") {
      newInputFields[index] = { ...newInputFields[index], isChecked: checked };
      const newCheckedValues = newInputFields.filter(field => field.isChecked).map(field => field.value);
      setCheckedValues(newCheckedValues);
    } else {
      newInputFields[index] = { ...newInputFields[index], [name]: value };
    }
    setInputFields(newInputFields);
  };

  useEffect(()=>{
    onPossibleValuesChange(inputFields);
  },[inputFields])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputFields);
    onClose();
  };

  const handleCloseSubmit = (e) => {
    e.preventDefault();
    console.log(checkedValues);
    onClose();
  };

  return (
    <>
      <button className="plus radius" onClick={handleAddFields}>
        +
      </button>
      {inputFields.map((inputField, index) => (
        <div key={index} className="InnerValKey">
          <input
            type="text"
            placeholder="Key"
            name="key"
            value={inputField.key}
            onChange={(e) => handleInputChange(index, e)}
          />
          <input
            type="text"
            placeholder="Value"
            name="value"
            value={inputField.value}
            onChange={(e) => handleInputChange(index, e)}
          />
          <input
            type="checkbox"
            checked={inputField.isChecked}
            onChange={(e) => handleInputChange(index, e)}
          />
        </div>
      ))}
      <button className="initial-btn" onClick={handleCloseSubmit}>
        Submit
      </button>
    </>
  );
};

export default KeyValue;
