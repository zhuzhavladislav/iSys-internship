import React from "react";
import "./QuestionCircle.css";

const QuestionCircle = (props) => {
  return (
    <div
      id={props.id}
      className={
        "circle " +
        (props.currentStepId === props.id
          ? "currentStepCircle"
          : "questionCircle")
      }
      style={{ backgroundColor: props.color }}
    >
      {props.id}
    </div>
  );
};

export default QuestionCircle;
