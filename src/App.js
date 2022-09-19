import "./App.css";
import Quiz from "./views/Quiz";
import localData from "./store/interactiveFormData.json";

function App() {
  return (
      <Quiz localData={localData}/>
  );
}

export default App;
