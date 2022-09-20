import React, { useState } from "react";
import "./InteractiveForm.css";
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
    action.nextStep.forEach((step) => {
      //Если нет conditions
      if (!step.conditions) {
        setCurrentStepId(step.id);
      } else {
        //Если несколько conditions
        if (step.conditions.length === userConditions.length) {
          if (JSON.stringify(userConditions) === JSON.stringify(step.conditions)) {
            setCurrentStepId(step.id);
          }
        } else {
          //Если один condition
          userConditions.forEach((userCondition) => {
            step.conditions.forEach((jsonCondition) => {
              if (userCondition.id === jsonCondition.id) {
                if (userCondition.result === jsonCondition.result) {
                  setCurrentStepId(step.id);
                }
              }
            });
          });
        }
      }
    });
    userConditions.push({ id: currentData.id, result: action.result });
  };

  const createMarkup = (string) => {
    return { __html: string };
  };

  return (
    <div className="form">
      <Line />
      <div className="stepsContainer">
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
