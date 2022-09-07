import React, {useStyles} from "react";
import "./QuestionCircle.css"

export default function QuestionCircle(props) {
  return (
    <div className="circleContainer">
      <div id={props.id} className={"circle " + (props.currentStepId === props.id ? 'currentStepCircle' : 'questionCircle')}>{props.id}</div>
    </div>
  );
}
