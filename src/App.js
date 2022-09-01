import "./App.css";

function App() {
  let test = { title: "Проходили ли вы чето там?", text: "<li>проверка</li>" };

  console.log(test);

  return (
    <div>
      <div className="question-line">
        <div className="question-div">
          <div className="circle question-circle">1</div>
        </div>
        <div className="line-div">
          <div className="line"></div>
        </div>
        <div className="question-div">
          <div className="circle question-circle">2</div>
        </div>
        <div className="line-div">
          <div className="line"></div>
        </div>
        <div className="question-div">
          <div className="circle question-circle">3</div>
        </div>
        <div className="line-div">
          <div className="line"></div>
        </div>
        <div className="question-div">
          <div className="circle question-circle">4</div>
        </div>
        <div className="line-div">
          <div className="line"></div>
        </div>
        <div className="question-div">
          <div className="circle question-circle">5</div>
        </div>
      </div>

      <div className="content">
        <div className="circle number-circle">1</div>
        <div className="contentBlock">
          {/* {(props. !== "" && props. !== null) && (
          )} */}
          <h4>{test.title}</h4>
          <p>{test.text}</p>
          <h5>Готовы начать?</h5>
          <div className="answer">
            <div className="circle answer-circle yes-circle">Да</div>
            <div className="circle answer-circle no-circle">Нет</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
