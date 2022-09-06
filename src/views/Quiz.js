import React from "react";
import Line from "../components/Line";
import QuestionCircle from "../components/QuestionCircle";
import Result from "../components/Result";
import quiz from "../local-json/quiz.json";

export default class Quiz extends React.Component {
  state = {
    id: quiz[0].id,
    title: quiz[0].title,
    content: quiz[0].content,
    actions: quiz[0].actions,
    userConditions: [],
  };

  clickYes() {
    document.getElementById(this.state.id).style.backgroundColor = '#48a044';
    this.setState({ actions: null });

    if (this.state.actions[0].nextStep[0].conditions == null) {
      this.setState(quiz[this.state.actions[0].nextStep[0].id - 1]);
    } else {
      for (var i = 0; i < this.state.actions[0].nextStep.length; i++) {
        if (
          JSON.stringify(this.state.userConditions) ===
          JSON.stringify(this.state.actions[0].nextStep[i].conditions)
        ) {
          console.log("equals?");
          this.setState(quiz[this.state.actions[0].nextStep[i].id - 1]);
        }
      }
    }

    this.setState({
      userConditions: [
        ...this.state.userConditions,
        ...[{ id: this.state.id, result: this.state.actions[0].result }],
      ],
    });
  }

  clickNo() {
    document.getElementById(this.state.id).style.backgroundColor = '#cd222c';
    this.setState({ actions: null });

    if (this.state.actions[1].nextStep[0].conditions == null) {
      this.setState(quiz[this.state.actions[1].nextStep[0].id - 1]);
    } else {
      for (var i = 0; i < this.state.actions[1].nextStep.length; i++) {
        if (
          JSON.stringify(this.state.userConditions) ===
          JSON.stringify(this.state.actions[1].nextStep[i].conditions)
        ) {
          this.setState(quiz[this.state.actions[1].nextStep[i].id - 1]);
        }
      }
    }

    this.setState({
      userConditions: [
        ...this.state.userConditions,
        ...[{ id: this.state.id, result: this.state.actions[1].result }],
      ],
    });
  }

  render() {
    return (
      <div>
        <div className="question-line">
          <Line n={quiz.length} />
          {quiz.map((circle) => (
            <QuestionCircle id={circle.id} key={circle.id} />
          ))}
        </div>

        <div className="content" id="content">
          <div className="contentBlock">
            <div className="circle number-circle">{this.state.id}</div>
            <h4>{this.state.title}</h4>
            {this.state.content !== "" && this.state.content !== null && (
              <p>{this.state.content}</p>
            )}
            {this.state.actions !== "" && this.state.actions !== null && (
              <React.Fragment>
                <div className="answer">
                  <div
                    className="circle answer-circle yes-circle"
                    onClick={this.clickYes.bind(this)}
                  >
                    {this.state.actions[0].title}
                  </div>
                  {this.state.actions.length !== 1 && (
                    <div
                      className="circle answer-circle no-circle"
                      onClick={this.clickNo.bind(this)}
                    >
                      {this.state.actions[1].title}
                    </div>
                  )}
                </div>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    );
  }
}
