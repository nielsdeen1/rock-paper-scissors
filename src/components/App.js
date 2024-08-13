import "../styles.css";
import RPS from "./RPS.jsx";
import { useState } from "react";

export default function App() {
  // States to keep track of Player's / Computer's score
  // and change the message depending on outcome of the game (win, loss, draw).
  [userScore, setUserScore] = useState(0);
  [compScore, setCompScore] = useState(0);
  [resultMessage, setResultMessage] = useState("");

  return (
    <div className="App">
      <h1>Rock Paper Scissors Game</h1>
      <h2>Choose your move:</h2>

      <RPS
        id="rock"
        emoji="👊"
        currentUserScore={userScore}
        increaseUserScore={setUserScore}
        currentCompScore={compScore}
        increaseCompScore={setCompScore}
        onNewResult={setResultMessage}
      />
      <RPS
        id="paper"
        emoji="🖐️"
        currentUserScore={userScore}
        increaseUserScore={setUserScore}
        currentCompScore={compScore}
        increaseCompScore={setCompScore}
        onNewResult={setResultMessage}
      />
      <RPS
        id="scissors"
        emoji="✌️"
        currentUserScore={userScore}
        increaseUserScore={setUserScore}
        currentCompScore={compScore}
        increaseCompScore={setCompScore}
        onNewResult={setResultMessage}
      />
      <h2>{resultMessage}</h2>
      <h2>
        Your score: <span id="ownscore"> {userScore} </span> Computer score{" "}
        <span id="compscore"> {compScore} </span>
      </h2>
    </div>
  );
}
