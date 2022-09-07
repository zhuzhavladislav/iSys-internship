import React from "react";
import "./QuestionCircle.css"

export default function QuestionCircle(props) {
  return (
    <div className="circleContainer">
      <div id={props.id} className="circle questionCircle">{props.id}</div>
    </div>
  );
}
