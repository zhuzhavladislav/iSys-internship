import React, { useState } from "react";
import "./Quiz.css";
import Line from "../components/Line/Line";
import QuestionCircle from "../components/QuestionCircle/QuestionCircle";

const Quiz = ({ localData }) => {
  let [currentStepId, setCurrentStepId] = useState(1);
  let [userConditions] = useState([]);
  const currentData = localData?.find((step) => step.id === currentStepId);

  const stepColor = (id) => {
    const stepCondition = userConditions?.find((step) => step.id === id);
    if (stepCondition) {
      if (stepCondition.result === "y") {
        return "#48a044";
      }
      return "#cd222c";
    }
    return "";
  };

  const handleClick = (action) => {
    for (var j = 0; j < action.nextStep.length; j++) {
      if (!action.nextStep[j].conditions) {
        setCurrentStepId(action.nextStep[j].id);
      } else {
        for (var i = 0; i < action.nextStep.length; i++) {
          if (userConditions[i]) {
            if (action.nextStep[j].conditions[i]) {
              if (
                JSON.stringify(userConditions[i]) ===
                JSON.stringify(action.nextStep[j].conditions[i])
              ) {
                setCurrentStepId(action.nextStep[j].id);
              }
            }
          }
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
        {localData.map((step) => (
          <QuestionCircle
            id={step.id}
            key={step.id}
            currentStepId={currentStepId}
            color={stepColor(step.id)}
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
