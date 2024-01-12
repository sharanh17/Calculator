import "./index.css";
import React from "react";
import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        const result = eval(input);
        setOutput(result);
      } catch (error) {
        setOutput("Error");
        setInput("");
      }
    } else if (value === "C") {
      setInput("");
      setOutput("");
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };
  return (
    <>
      <h1 className="new">React Calculator</h1>
      <div className="calculator">
        <input type="text" value={input} readOnly />
        <div className="result">{output}</div>
        <div className="buttons">
          {[7, 8, 9, "+", 4, 5, 6, "-", 1, 2, 3, "*", "C", 0, "=", "/"].map(
            (button) => (
              <button key={button} onClick={() => handleButtonClick(button)}>
                {button}
              </button>
            )
          )}
        </div>
      </div>
    </>
  );
}

