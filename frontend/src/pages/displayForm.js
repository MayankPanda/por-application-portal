import React from "react";
import FillForm from "./fillForm";

function DisplayForm() {
  // Sample form data representing the form with text, radio, and checkbox fields
  const formData = [
    {
      type: 0,
      title: "Text Field",
      Data: {
        text: "Sample Text",
      },
    },
    {
      type: 1,
      title: "Radio Series",
      Data: {
        values: ["Option 1", "Option 2", "Option 3"],
        selectedIndices: [],
      },
    },
    {
      type: 2,
      title: "Checkbox Series",
      Data: {
        values: ["Option A", "Option B", "Option C"],
        selectedIndices: [],
      },
    },
  ];

  return (
    <div>
      <h2>Display Form</h2>
      <FillForm formData={formData} />
    </div>
  );
}

export default DisplayForm;
