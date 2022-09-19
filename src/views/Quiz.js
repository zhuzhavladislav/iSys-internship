import React, { useState } from "react";
import "./Quiz.css"
import Line from "../components/Line/Line";
import QuestionCircle from "../components/QuestionCircle/QuestionCircle";

const Quiz = (props) => {
  let [currentStepId, setCurrentStepId] = useState(1);
  let [userConditions] = useState([]);
  const currentData = props.localData?.find((step) => step.id === currentStepId);

  const stepColor = (id) => {
    if (userConditions[id]) {
      if (userConditions[id].result === "y") {
        return "#48a044";
      }
      return "#cd222c";
    }
    return "";
  };

  const handleClick = (action) => {
    if (!action.nextStep[0].conditions) {
      setCurrentStepId(action.nextStep[0].id);
    } else {
      for (var i = 0; i < action.nextStep.length; i++) {
        if (
          JSON.stringify(userConditions) ===
          JSON.stringify(action.nextStep[i].conditions)
        ) {
          setCurrentStepId(action.nextStep[i].id);
        }
      }
    }
    userConditions.push({ id: currentData.id, result: action.result });
  };

  const createMarkup = (string) => {
    return { __html: string };
  };

  return (
    <div className="form">
      <Line />
      <div className="stepContainer">
        {props.localData.map((step) => (
          <QuestionCircle
            id={step.id}
            key={step.id}
            currentStepId={currentStepId}
            color={stepColor(step.id - 1)}
          />
        ))}
      </div>

      <div className="currentStepCard">
        <div className="circle numberCircle">{currentData.id}</div>
        <h4>{currentData.title}</h4>
        {currentData.content && (
          <p dangerouslySetInnerHTML={createMarkup(currentData.content)}></p>
        )}
        {currentData.actions && (
          <div className="answerContainer">
            {currentData.actions?.map((action, i) => (
              <div
                key={action.id}
                className={
                  "circle answerCircle " +
                  (currentData.actions[i].result === "y"
                    ? "yesCircle"
                    : "noCircle")
                }
                onClick={() => handleClick(action)}
              >
                {action.title}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
