import React, { useState } from "react";
import axios from "axios";
function AddDynamicInput() {
  const [fields, setFields] = useState([]);
  const [title, setTitle] = useState("Radios");
  const [multiTitle, setMultiTitle] = useState("Checkboxes");
  const [textInputTitle, setTextInputTitle] = useState("");
  const [formTitle, setFormTitle] = useState(""); // Form Title
  const [formDescription, setFormDescription] = useState(""); // Form Description
  const [options, setOptions] = useState("");
  const [showTitleField, setShowTitleField] = useState(false);
  const [showMultiTitleField, setShowMultiTitleField] = useState(false);
  const [showTextInputField, setShowTextInputField] = useState(false);
  const [showOptionDialog, setShowOptionDialog] = useState(false);
  const [currentFieldType, setCurrentFieldType] = useState(null);
  const [currentFieldIndex, setCurrentFieldIndex] = useState(null);
  const [doneFieldIndexes, setDoneFieldIndexes] = useState([]);

  const handleAdd = (type) => {
    setShowTitleField(false);
    setShowMultiTitleField(false);
    setShowTextInputField(false);
    setShowOptionDialog(false);
    setCurrentFieldType(null);
    setCurrentFieldIndex(null);

    if (type === "radio") {
      setFields((prevFields) => [
        ...prevFields,
        { type: "radio", title: title, options: [], value: "" },
      ]);
    } else if (type === "checkbox") {
      setFields((prevFields) => [
        ...prevFields,
        { type: "checkbox", title: multiTitle, options: [], value: [] },
      ]);
    } else if (type === "text") {
      setShowTextInputField(true);
    }
  };

  const handleAddOption = () => {
    if (options.trim() === "") {
      alert("Option cannot be empty!");
      return;
    }

    if (currentFieldType === "radio" || currentFieldType === "checkbox") {
      setFields((prevFields) => {
        const updatedFields = [...prevFields];
        updatedFields[currentFieldIndex].options.push(options);
        return updatedFields;
      });
    }

    setOptions("");
  };

  const handleDone = () => {
    if (options.trim() !== "") {
      handleAddOption();
    }

    setShowOptionDialog(false);
    setOptions("");
    if (currentFieldIndex !== null) {
      setDoneFieldIndexes((prevIndexes) => [...prevIndexes, currentFieldIndex]);
    }
  };

  const handleFinalizeTextTitle = () => {
    if (textInputTitle.trim() !== "") {
      setFields((prevFields) => [
        ...prevFields,
        { type: "text", title: textInputTitle, value: "" },
      ]);
    }
    setTextInputTitle("");
    setShowTextInputField(false);
  };

  const handleChange = (onChangeValue, i, fieldType) => {
    setFields((prevFields) => {
      const updatedFields = [...prevFields];
      updatedFields[i].value = onChangeValue.target.value;
      return updatedFields;
    });
  };

  const handleDelete = (i) => {
    setFields((prevFields) => {
      const updatedFields = [...prevFields];
      updatedFields.splice(i, 1);
      return updatedFields;
    });
    setDoneFieldIndexes((prevIndexes) =>
      prevIndexes.filter((index) => index !== i)
    );
  };

  const handleFinaliseForm = async(e) => {
    const finalFormData = fields.map((field) => {
      const data = {
        type: field.type === "text" ? 0 : field.type === "radio" ? 1 : 2,
        title: field.title,
        Data: {
          text: field.type === "text" ? field.value : null,
          values: field.type === "text" ? null : field.options,
          selectedIndices: field.type === "text" ? null : [],
        },
      };
      return data;
    });
    console.log(finalFormData);
    e.preventDefault();
    try {
      const url = "http://localhost:5000/api/applications/saveNewForm";
      const data={
        "userIdJwt":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGM5MzljYzU4OWNlNzZmODRlYWI1ZDQiLCJpYXQiOjE2OTA5NzA0Mjh9.2Jd6lhxY6Cf33SHWsXCowi2Bt_UpXh9oKoHJR72DHpM",
        "formName":"Example form 22",
        "formDesc":"Form axios creation api",
        "formData":[
            {
                "Data":{
                    "text":"",
                    "values":["Options1", "Options2","Options3"],
                    "selectedIndices":[]
                },
                "title":"Example Radio Buttons",
                "type":"1"
            },
            {
                "Data":{
                    "text":"",
                    "values":[],
                    "selectedIndices":[]
                },
                "title":"Example Text Box",
                "type":"0"
            }
        ]
    };
      const { data: res } = await axios.post(url, data);
      console.log(res.message);
    } catch (error) {
      // if (error.response && error.response.status >= 400 && error.response.status <= 500) {
      //   setError(error.response.data.message);
      // }
      console.log(error);
    }
    console.log(finalFormData);
  };

  return (
    <div>
      <div>
        <label>Form Title</label>
        <input
          type="text"
          value={formTitle}
          onChange={(e) => setFormTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Form Description</label>
        <input
          type="text"
          value={formDescription}
          onChange={(e) => setFormDescription(e.target.value)}
        />
      </div>
      {showTitleField && (
        <>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button onClick={() => handleAdd("radio")}>Finalize Radio Title</button>
        </>
      )}
      {showMultiTitleField && (
        <>
          <input
            type="text"
            value={multiTitle}
            onChange={(e) => setMultiTitle(e.target.value)}
          />
          <button onClick={() => handleAdd("checkbox")}>Finalize Checkbox Title</button>
        </>
      )}
      {showTextInputField && (
        <>
          <input
            type="text"
            value={textInputTitle}
            onChange={(e) => setTextInputTitle(e.target.value)}
          />
          <button onClick={handleFinalizeTextTitle}>Finalize Text Input Title</button>
        </>
      )}

      {!showTitleField && !showMultiTitleField && !showTextInputField && !showOptionDialog && (
        <>
          <button onClick={() => setShowTitleField(true)}>Add</button>
          <button onClick={() => setShowMultiTitleField(true)}>Multi</button>
          <button onClick={() => setShowTextInputField(true)}>Text</button>
        </>
      )}

      {showOptionDialog && (
        <>
          <input
            type="text"
            value={options}
            onChange={(e) => setOptions(e.target.value)}
          />
          <button onClick={handleAddOption}>Add Option</button>
          <button onClick={handleDone}>Done</button>
        </>
      )}

      {fields.map((field, i) => (
        <div key={i}>
          {field.type !== "text" && <h3>{field.title}</h3>}
          {field.type === "text" ? (
            <>
            <h3>{field.title}</h3>
              <input type="text" placeholder={field.title} />
              <button onClick={() => handleDelete(i)}>x</button>
            </>
          ) : (
            field.options.map((option, index) => (
              <div key={index}>
                {field.type === "radio" ? (
                  <>
                    <input
                      type="radio"
                      name={`field${i}`}
                      value={option}
                      checked={field.value === option}
                      onChange={(e) => handleChange(e, i, field.type)}
                    />
                    <label>{option}</label>
                  </>
                ) : (
                  <>
                    <input
                      type="checkbox"
                      name={`field${i}`}
                      value={option}
                      checked={field.value.includes(option)}
                      onChange={(e) => handleChange(e, i, field.type)}
                    />
                    <label>{option}</label>
                  </>
                )}
              </div>
            ))
          )}
          {field.type !== "text" && !doneFieldIndexes.includes(i) && (
            <button
              onClick={() => {
                setCurrentFieldType(field.type);
                setCurrentFieldIndex(i);
                setShowOptionDialog(true);
              }}
            >
              Add Option
            </button>
          )}
          {field.type !== "text" && (
            <button onClick={() => handleDelete(i)}>x</button>
          )}
        </div>
      ))}

      {fields.length > 0 && !showOptionDialog && (
        <button onClick={handleFinaliseForm}>Finalise Form</button>
      )}
    </div>
  );
}

export default AddDynamicInput;