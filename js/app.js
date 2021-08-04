const gameForm = document.querySelector("#game-form");
const range = document.querySelector("#range");
const select = document.querySelector("#select");

const userNumResult = document.querySelector("#userNum");
const pcNumResult = document.querySelector("#pcNum");
const result = documnet.querySelector("#result");

const HIDDEN_CLASSNAME = "hidden";

function randomGame(event) {
  event.preventDefault();
  const rangeNum = pareInt(range.value);
  const userNum = pareInt(select.value);
  const pcNum = Math.floor(Math.random() * rangeNum);

  userNumResult.innerText = `you chose: ${userNum},`;
  pcNumResult.innerText = `the machine chose: ${pcNum},`;

  if (userNum === pcNum) {
    result.innerText = "you win!";
  } else {
    result.innerText = "you lost!";
  }
}
gameForm.addEventListener("click", randomGame);
