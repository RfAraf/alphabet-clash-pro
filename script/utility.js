function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  //   hide an element by adding a hidden class
  element.classList.add("hidden");
}

function showElementById(elementId) {
  const element = document.getElementById(elementId);
  //   showing an element by removing their hidden class
  element.classList.remove("hidden");
}

// get a random alphabet
function getARandomAlphabet() {
  // creating alphabets in a array
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetString.split("");

  // creating random number between 0-25
  const randomNum = Math.random() * 25;
  const index = Math.floor(randomNum);

  // get a random alphabet in the alphabets array
  const alphabet = alphabets[index];
  return alphabet;
}

// set a background color on specific key
function setBackgroundColorByVariable(variable) {
  const element = document.getElementById(variable);
  element.classList.add("bg-orange-400");
}

// remove the background color on the last key
function removeBackgroundColorByVariable(variable) {
  const element = document.getElementById(variable);
  element.classList.remove("bg-orange-400");
}

function getTextElementValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementText = element.innerText;
  const value = parseInt(elementText);
  return value;
}

function setTextElementValueById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

/* // increase score
function increaseScore() {
  const scoreElement = document.getElementById("current-score");
  const scoreElementText = scoreElement.innerText;
  const score = parseInt(scoreElementText);
  const newScore = score + 1;
  scoreElement.innerText = newScore;
}

// decrease life
function decreaseLife() {
  const lifeElement = document.getElementById("current-life");
  const lifeElementText = lifeElement.innerText;
  const life = parseInt(lifeElementText);
  const newLife = life - 1;
  lifeElement.innerText = newLife;

  if (newLife === 0) {
    gameOver();
  }
} */
