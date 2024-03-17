import React, { useState, useEffect } from "react";

const FieldValus = ({ onFieldValueChange, clearFieldValue , sendValue}) => {
  
  const [fieldValue, setFieldValue] = useState("");

  const handleInputChange = (e) => {
    const { value } = e.target;
    const valueArray = [value];
    onFieldValueChange(valueArray);
    setFieldValue(value);
  };

  useEffect(() => {
    if (clearFieldValue) {
      setFieldValue("");
    }
  }, [clearFieldValue]);

  return (
    <>
      <div className="field">
        <label>Field Value</label>
        <input
          type={sendValue}
          name="field_value"
          id="field_value"
          value={fieldValue}
          onChange={handleInputChange}
          required
        />
      </div>
    </>
  );
};

export default FieldValus;
