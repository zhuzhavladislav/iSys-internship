import React, { useStyles } from "react";
import "./QuestionCircle.css";

const QuestionCircle = (props) => {
  return (
    <div className="circleContainer">
      <div
        id={props.id}
        className={
          "circle " +
          (props.currentStepId === props.id
            ? "currentStepCircle"
            : "questionCircle")
        }
        style={{backgroundColor: props.color}}
      >
        {props.id}
      </div>
    </div>
  );
}

export default QuestionCircle;
