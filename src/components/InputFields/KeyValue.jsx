import React, { useState,useEffect } from "react";

const KeyValue = ({ onClose, onPossibleValuesChange, dropdownValue }) => {
    
  const [inputFields, setInputFields] = useState([{ key: "", value: "", isChecked: false }]);
  const [checkedValues, setCheckedValues] = useState([]);

  const handleAddFields = (e) => {
    e.preventDefault();
    setInputFields([...inputFields, { key: "", value: "", isChecked: false }]);
  };

  const handleInputChange = (index, e) => {
    const { name, value, type, checked } = e.target;
    let newInputFields = [...inputFields];
    
    if (type === "checkbox" && (dropdownValue === "Dropdown" || dropdownValue === "Radio")) {
      newInputFields = newInputFields.map((field, i) => ({
        ...field,
        isChecked: i === index ? checked : false 
      }));
      setCheckedValues(checked ? [value] : []);
    } else if (type === "checkbox") {
      newInputFields[index] = { ...newInputFields[index], isChecked: checked };
      const newCheckedValues = newInputFields
        .filter((field) => field.isChecked)
        .map((field) => field.value);
      setCheckedValues(newCheckedValues);
    } else {
      newInputFields[index] = { ...newInputFields[index], [name]: value };
    }
    setInputFields(newInputFields);
  };
  

  useEffect(()=>{
    onPossibleValuesChange(inputFields);
  },[inputFields])


  const handleCloseSubmit = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <>
        <button className="cross-btn" onClick={onClose}>
          &times;
        </button>
        <button className="plus-btn" onClick={handleAddFields}>
          <img className="plus-img" src="https://www.svgrepo.com/show/8377/plus.svg" alt="" />
        </button>

      {inputFields.map((inputField, index) => (
        <div key={index} className="InnerValKey">
          <input
            type="text"
            placeholder="Key"
            name="key"
            value={inputField.key}
            onChange={(e) => handleInputChange(index, e)} 
            required
          />
          <input
            type="text"
            placeholder="Value"
            name="value"
            value={inputField.value}
            onChange={(e) => handleInputChange(index, e)} 
            required
          />
          <input
            type="checkbox"
            checked={inputField.isChecked}
            onChange={(e) => handleInputChange(index, e)}
          />
        </div>
      ))}
      <button className="initial-btn for-spacing" onClick={handleCloseSubmit}>
        Submit
      </button>
    </>
  );
};

export default KeyValue;
