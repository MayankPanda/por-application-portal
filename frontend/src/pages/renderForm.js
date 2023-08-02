import React from "react";

function DisplayArbitraryForm({ formData }) {
  const renderField = (field, index) => {
    switch (field.type) {
      case 0: // Textbox
        return (
          <div key={index}>
            <label>{field.title}</label>
            <input type="text" value={field.Data.text} />
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
                  value={option}
                  checked={field.Data.selectedIndices.includes(optionIndex)}
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
                  value={option}
                  checked={field.Data.selectedIndices.includes(optionIndex)}
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
      {formData.map((field, index) => renderField(field, index))}
    </div>
  );
}

export default DisplayArbitraryForm;
