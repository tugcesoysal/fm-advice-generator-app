import { useState } from "react";
import "./App.css";
import { adviceData } from "./advice-data";

function App() {
  const randomNumber = Math.floor(Math.random() * 9) + 1;

  const [advices, setAdvices] = useState(adviceData);
  const [index, setIndex] = useState(randomNumber);
  const randomAdvice = advices[index];

  const generateRandomAdvice = () => {
    const randomNumber = Math.floor(Math.random() * 10);
    setIndex(randomNumber);
  };

  return (
    <div className="App">
      <h4>Advice #{randomAdvice.id}</h4>
      <h1>"{randomAdvice.quote}"</h1>
      <img
        src="../images/pattern-divider-mobile.svg"
        alt="line-break"
        className="line-break"
      />
      <button onClick={generateRandomAdvice}>
        <img src="../images/icon-dice.svg" alt="icon-dice" />
      </button>
    </div>
  );
}

export default App;
