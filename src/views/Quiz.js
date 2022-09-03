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
    conditions: [],
  };

  handleCallback = (childData) => {
    this.setState({ actions: "" });
    this.setState(quiz[childData.nextStep - 1]);
    this.setState({
      conditions: [
        ...this.state.conditions,
        ...[{ id: childData.id, result: childData.result }],
      ],
    });
    // console.log("New data:");
    // console.log(this.state);
  };

  render() {
    console.log("Parent");
    console.log(this.state);
    return (
      <div>
        <div className="question-line">
          <Line n={quiz.length} />
          {quiz.map((circle) => (
            <QuestionCircle key={circle.id} id={circle.id} />
          ))}
        </div>
        <Result resultData={this.state} parentCallback={this.handleCallback} conditions={this.state.conditions}/>
      </div>
    );
  }
}
