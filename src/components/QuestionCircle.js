import React from "react";

export default function QuestionCircle(props) {
  return (
    <div className="question-div">
      <div className="circle question-circle">{props.id}</div>
    </div>
  );
}
