// capture keyboard key press
document.addEventListener("keyup", function (event) {
  const playerPressed = event.key;

  // to play press "enter" key
  if (playerPressed === "Enter") {
    play();
  }

  // to escape the game press "escape" key
  if (playerPressed === "Escape") {
    gameOver();
  }

  const currentAlphabetElement = document
    .getElementById("current-alphabet")
    .innerText.toLocaleLowerCase();
  console.log(playerPressed, currentAlphabetElement);

  if (playerPressed === currentAlphabetElement) {
    continueGame();
    removeBackgroundColorByVariable(currentAlphabetElement);
    // increase score
    const currentScore = getTextElementValueById("current-score");
    const updatedScore = currentScore + 1;
    setTextElementValueById("current-score", updatedScore);
    // const currentScoreElement = document.getElementById("current-score");
    // const currentScoreText = currentScoreElement.innerText;
    // const currentScore = parseInt(currentScoreText);
    // console.log(currentScore);

    // const newScore = currentScore + 1;
    // currentScoreElement.innerText = newScore;
  } else {
    // decrease life
    const currentLife = getTextElementValueById("current-life");
    const updatedLife = currentLife - 1;
    setTextElementValueById("current-life", updatedLife);

    if (updatedLife === 0) {
      gameOver();
    }
  }
});

function continueGame() {
  // get a random alphabet
  const alphabet = getARandomAlphabet();

  // display random alphabet
  const currentAlphabetElement = document.getElementById("current-alphabet");
  currentAlphabetElement.innerText = alphabet;

  // set background color on specific key
  setBackgroundColorByVariable(alphabet);
}

function play() {
  hideElementById("home-screen");
  hideElementById("score-board");
  showElementById("play-ground");

  setTextElementValueById("current-life", 6);
  setTextElementValueById("current-score", 0);

  const currentAlphabetElement = document
    .getElementById("current-alphabet")
    .innerText.toLocaleLowerCase();
  removeBackgroundColorByVariable(currentAlphabetElement);

  continueGame();
}
// function play() {
//   const homeScreen = document.getElementById("home-screen");
//   homeScreen.classList.add("hidden");

//   const playGround = document.getElementById("play-ground");
//   playGround.classList.remove("hidden");
// }

function gameOver() {
  hideElementById("play-ground");
  showElementById("score-board");

  // update the final score
  const lastScore = getTextElementValueById("current-score");
  setTextElementValueById("final-score", lastScore);
}
