import "./App.css";
import InteractiveForm from "./views/InteractiveForm";
import localData from "./store/interactiveFormData.json";

function App() {
  return (
      <InteractiveForm localData={localData}/>
  );
}

export default App;
