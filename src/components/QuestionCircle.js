import React from "react";

export default function QuestionCircle(props) {
  return (
    <div className="question-div">
      <div id={props.id} className="circle question-circle">{props.id}</div>
    </div>
  );
}
