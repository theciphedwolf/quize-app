import React, { useState } from "react";

// Function to question inside our app
const QuestionBox = ({ question, options, selected, terminate }) => {
  const arrOptions = [];

  for (const key in options[0]) {
    if (options[0].hasOwnProperty(key)) {
      arrOptions.push(options[0][key]);
    }
  }

  return (
    <div className="questionBox">
      <div className="question">{question}</div>
      {arrOptions.map((option, index) => (
        <button
          key={index}
          className="answerBtn"
          onClick={() => {
            selected(option, terminate);
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default QuestionBox;
