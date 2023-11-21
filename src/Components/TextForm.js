import React, { useState } from "react";

function TextForm(props) {
  const [text, setText] = useState("Enter the text here");
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleUpClick = () => {
    setText(text.toUpperCase());
  };
  const handleLoClick = () => {
    setText(text.toLowerCase());
  };
  const handleClearClick = () => {
    setText("");
  };
  const handleCopyClick = () => {
    let selectText = document.getElementById("exampleFormControlTextarea1");
    selectText.select();
    navigator.clipboard.writeText(selectText.value);
  };
  return (
    <>
      <div
        className="container"
        style={{
          backgroundColor: props.mode === "light" ? "#fff" : "grey",
          color: props.mode === "light" ? "#000" : "#fff",
        }}
      >
        <h1>{props.title}</h1>
        <textarea
          className="form-control mb-3"
          id="exampleFormControlTextarea1"
          rows={8}
          value={text}
          onChange={handleOnChange}
          style={{
            backgroundColor: props.mode === "light" ? "#fff" : "grey",
            color: props.mode === "light" ? "#000" : "#fff",
          }}
        ></textarea>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-1"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleClearClick}
        >
          Clear
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleCopyClick}
        >
          Copy
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "#000" : "#fff" }}
      >
        <h3>Your Text Summary</h3>
        <p>
          {text.length} characters and{" "}
          {
            text.split(" ").filter((word) => {
              return word.length !== 0;
            }).length
          }{" "}
          words
        </p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter the text"}</p>
      </div>
    </>
  );
}

export default TextForm;
