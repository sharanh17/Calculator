import "./index.css";
import React, { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [isValid, setIsValid] = useState(true);

  const validateExpression = (expr) => {
    try {
      eval(expr); // Attempt to evaluate the expression
      return true; // Expression is valid
    } catch (error) {
      return false; // Expression is invalid
    }
  };

  const handleButtonClick = (value) => {
    if (value === "=") {
      const isExpressionValid = validateExpression(input);

      if (isExpressionValid && input!== "") {
        try {
          const result = eval(input);
          setOutput(result);
          setIsValid(true);
        } catch (error) {
          setOutput("Error");
          setInput("");
          setIsValid(false);
        }
      } else {
        setOutput("Error");
        setIsValid(false);
      }
    } else if (value === "C") {
      setInput("");
      setOutput("");
      setIsValid(true); 
    } else {
      setInput((prevInput) => prevInput + value);
      setOutput(""); // Clear output when a new digit/operator is pressed
      setIsValid(true); // Reset validation for a new input
    }
  };

  return (
    <>
      <h1 className="new">React Calculator</h1>
      <div className="calculator">
        <input type="text" value={input} readOnly />
        <div className={`result ${isValid ? "" : "error"}`}>{output}</div>
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

