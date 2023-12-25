import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleClearClick = () => {
    setText("");
    props.showAlert("Textbox cleared", "success");
  };

  const handleCopyClick = (event) => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied!", "success");
  };

  const handleRemoveExtraSpaceClick = () => {
    let newText = text.replace(/\s+/g, " ").trim();
    setText(newText);
    props.showAlert("Extra spaces removed", "success");
  };

  const countWord = () => {

    let newText = text.replace(/\s+/g, " ").trim();
    // console.log(newText.length);
    if (newText.length === 0) return 0;
    else return newText.split(" ").length;
  };

  const [text, setText] = useState("Enter text here");
  return (
    <div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert To Upeer
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert To Lower
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopyClick}>
          Copy to clipboard
        </button>
        <button className="btn btn-primary mx-1" onClick={countWord}>
          count
        </button>
        <button
          className="btn btn-primary mx-1"
          onClick={handleRemoveExtraSpaceClick}
        >
          Remove Extra Space
        </button>

        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>Your text summary</h1>
        <p>
          {countWord()} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview it here"}
        </p>
      </div>
    </div>
  );
}
