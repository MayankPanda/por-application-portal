import React, { useState, useEffect } from "react";

function FillForm({ formData }) {
  const [filledFormData, setFilledFormData] = useState([]);

  useEffect(() => {
    setFilledFormData(formData.map((field) => ({ ...field })));
  }, [formData]);

  const handleTextInputChange = (event, index) => {
    const updatedFields = [...filledFormData];
    updatedFields[index].Data.text = event.target.value;
    setFilledFormData(updatedFields);
  };

  const handleRadioChange = (event, index) => {
    const updatedFields = [...filledFormData];
    updatedFields[index].Data.selectedIndices = [parseInt(event.target.value)];
    setFilledFormData(updatedFields);
  };

  const handleCheckboxChange = (event, index) => {
    const optionIndex = parseInt(event.target.value);
    const updatedFields = [...filledFormData];
    const selectedIndices = updatedFields[index].Data.selectedIndices;
    const isSelected = selectedIndices.includes(optionIndex);

    if (isSelected) {
      updatedFields[index].Data.selectedIndices = selectedIndices.filter(
        (index) => index !== optionIndex
      );
    } else {
      updatedFields[index].Data.selectedIndices = [
        ...selectedIndices,
        optionIndex,
      ];
    }

    setFilledFormData(updatedFields);
  };

  const handleSubmit = () => {
    console.log(filledFormData);
  };

  const renderField = (field, index) => {
    switch (field.type) {
      case 0: // Textbox
        return (
          <div key={index}>
            <label>{field.title}</label>
            <input
              type="text"
              value={filledFormData[index].Data.text}
              onChange={(e) => handleTextInputChange(e, index)}
            />
          </div>
        );
      case 1: // Radio Series
        return (
          <div key={index}>
            <h3>{field.title}</h3>
            {field.Data.values.map((option, optionIndex) => (
              <div key={optionIndex}>
                <input
                  type="radio"
                  name={`field${index}`}
                  value={optionIndex}
                  checked={filledFormData[index].Data.selectedIndices.includes(
                    optionIndex
                  )}
                  onChange={(e) => handleRadioChange(e, index)}
                />
                <label>{option}</label>
              </div>
            ))}
          </div>
        );
      case 2: // Checkbox Series
        return (
          <div key={index}>
            <h3>{field.title}</h3>
            {field.Data.values.map((option, optionIndex) => (
              <div key={optionIndex}>
                <input
                  type="checkbox"
                  name={`field${index}`}
                  value={optionIndex}
                  checked={filledFormData[index].Data.selectedIndices.includes(
                    optionIndex
                  )}
                  onChange={(e) => handleCheckboxChange(e, index)}
                />
                <label>{option}</label>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      {filledFormData.map((field, index) => renderField(field, index))}
      <button onClick={handleSubmit}>Submit</button>
      <pre>{JSON.stringify(filledFormData, null, 2)}</pre>
    </div>
  );
}

export default FillForm;
