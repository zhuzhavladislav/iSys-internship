import React from "react";

export default class Result extends React.Component {
  
  handleClickYes = () => {
    this.props.parentCallback({
      nextStep: this.props.resultData.actions[0].nextStep[0].id,
      id: this.props.resultData.id,
      result: this.props.resultData.actions[0].result,
    });
    }


  handleClickNo = () => {
    this.props.parentCallback({
      nextStep: this.props.resultData.actions[1].nextStep[0].id,
      id: this.props.resultData.id,
      result: this.props.resultData.actions[1].result,
    });
  };

  render() {
    let resultData = this.props.resultData;
    console.log("Child:");
    console.log(resultData);
    console.log(this.props.conditions)
    return (
      <div className="content">
        <div className="contentBlock">
          <div className="circle number-circle">{resultData.id}</div>
          <h4>{resultData.title}</h4>
          {resultData.content !== "" && resultData.content !== null && (
            <p>{resultData.content}</p>
          )}
          {resultData.actions !== "" && resultData.actions !== null && (
            <React.Fragment>
              <div className="answer">
                <div
                  className="circle answer-circle yes-circle"
                  onClick={this.handleClickYes}
                >
                  {resultData.actions[0].title}
                </div>
                {resultData.actions.length !== 1 && (
                  <div
                    className="circle answer-circle no-circle"
                    onClick={this.handleClickNo}
                  >
                    {resultData.actions[1].title}
                  </div>
                )}
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}
