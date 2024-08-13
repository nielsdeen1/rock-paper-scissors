// Rock Paper Scissors component
// props:
// - onNewResult: Displays game outcome in main app component.
// - increaseUserScore / increaseCompScore: Increases the player's / computer's score by 1 in the game.
// - currentUserScore / currentCompScore: Current score of the Player / Computer.
// - id: html id of the button.
// - emoji: emoji of the button.

function RPS(props) {
  // Changing button style on hover
  function changeBackground(e) {
    e.target.style.background = "grey";
  }
  function defaultBackground(e) {
    e.target.style.background = "";
  }

  // Rock Paper Scissor game
  // Plays a game of Rock, Paper & Scissors against a computer using math.random().
  // important variables:
  // - userMove: User's input by button press.
  // - computerMove: random choice of computer.
  function gameOn(e) {
    var userMove = e.currentTarget.id;
    const options = ["rock", "paper", "scissors"];
    const randIndex = Math.floor(Math.random() * options.length);
    var computerMove = options[randIndex];

    if (
      (userMove === "rock" && computerMove === "scissors") ||
      (userMove === "paper" && computerMove === "rock") ||
      (userMove === "scissors" && computerMove === "paper")
    ) {
      console.log("You win! " + userMove + " beats " + computerMove);
      props.onNewResult("You win! " + userMove + " beats " + computerMove);
      props.increaseUserScore(props.currentUserScore + 1);
    } else if (
      (userMove === "paper" && computerMove === "scissors") ||
      (userMove === "scissors" && computerMove === "rock") ||
      (userMove === "rock" && computerMove === "paper")
    ) {
      console.log("You lose! " + computerMove + " beats " + userMove);
      props.onNewResult("You lose! " + computerMove + " beats " + userMove);
      props.increaseCompScore(props.currentCompScore + 1);
    } else if (userMove === computerMove) {
      console.log("It's a draw!");
      props.onNewResult("It's a draw!");
    }
  }

  return (
    <button
      id={props.id}
      onMouseOver={changeBackground}
      onMouseLeave={defaultBackground}
      onClick={gameOn}
    >
      {props.emoji}
    </button>
  );
}

export default RPS;
