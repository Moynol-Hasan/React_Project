import React, { useState, useEffect } from "react";

const FieldValus = ({ onFieldValueChange, clearFieldValue }) => {
  const [fieldValue, setFieldValue] = useState("");

  const handleInputChange = (e) => {
    const { value } = e.target;
    onFieldValueChange(value);
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
          type="text"
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
