import React from "react";
import DisplayArbitraryForm from "./renderForm";

function Render() {
  // Sample form data representing the form
  const formData = [
    {
      type: 0,
      title: "Text Field 1",
      Data: {
        text: "Sample Text 1",
      },
    },
    {
      type: 1,
      title: "Radio Series 1 ",
      Data: {
        values: ["Option 1", "Option 2", "Option 3", "Option 4"],
        selectedIndices: [2],
      },
    },
    {
      type: 2,
      title: "Checkbox Series",
      Data: {
        values: ["Option A", "Option B", "Option C"],
        selectedIndices: [1,2],
      },
    },
  ];

  return (
    <div>
      {/* ... (rest of your App component) */}
      <DisplayArbitraryForm formData={formData} />
    </div>
  );
}

export default Render;
