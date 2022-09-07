import React, { useEffect, useState } from "react";
import Line from "../components/Line/Line";
import QuestionCircle from "../components/QuestionCircle/QuestionCircle";
import localData from "../store/localData.json";

const Quiz = () => {
  const [currentStepId, setCurrentStepId] = useState(1);
  const [stepResults, setStepResults] = useState({});
  const currentData = localData?.find((step) => step.id === currentStepId);

  console.log(currentData);

  const createMarkup = (string) => {
    return { __html: string };
  };

  return (
    <div>
      <div className="form">
        <Line />
        <div className="stepContainer">
          {localData.map((step) => (
            <QuestionCircle
              id={step.id}
              key={step.id}
              currentStepId={currentStepId}
            />
          ))}
        </div>

        <div className="currentStepCard">
          <div className="circle numberCircle">{currentData.id}</div>
          <h4>{currentData.title}</h4>
          {currentData.content !== null && (
            <p dangerouslySetInnerHTML={createMarkup(currentData.content)}></p>
          )}
          <div className="answer">
            {currentData.actions?.map((action, i) => (
              <div>
                <div
                  key={action.id}
                  className={
                    "circle answerCircle " +
                    (currentData.actions[i].result === "y"
                      ? "yesCircle"
                      : "noCircle")
                  }
                  onClick=""
                >
                  {action.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
