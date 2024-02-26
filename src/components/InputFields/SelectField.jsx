import React, { useState } from "react";
import FieldValues from "./FieldValus";
import Modal from "./Modal";
import KeyValue from "./KeyValue";

const SelectField = ({ onValueTypeChange, onFieldValueChange, onPossibleValuesChange, clearFieldValue}) => {
  const [value, setValue] = useState("Text");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const options = [
    { label: "Text", value: "Text" },
    { label: "Number", value: "Number" },
    { label: "Password", value: "Password" },
    { label: "Dropdown", value: "Dropdown" },
    { label: "Radio", value: "Radio" },
    { label: "Checkbox", value: "Checkbox" },
  ];

  const handleChange = (e) => {
    const selectedValue = e.target.value;
    setValue(selectedValue);
    onValueTypeChange(selectedValue);
    if (["Dropdown", "Radio", "Checkbox"].includes(selectedValue)) {
      openModal();
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="field">
        <label htmlFor="types">Choose field type</label>
        <select name="types" id="types" onChange={handleChange}>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {value === "Text" || value === "Number" || value === "Password" ? (
        <FieldValues
          onFieldValueChange={onFieldValueChange}
          clearFieldValue={clearFieldValue}
        />
      ) : <p>Selected Values: </p>}

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <KeyValue
          onClose={closeModal}
          onPossibleValuesChange={onPossibleValuesChange}
        />
      </Modal>
    </>
  );
};

export default SelectField;
