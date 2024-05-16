//!GETTING ELEMENTS

//?Text ----------------------
const result = document.querySelector(".result");
const desc = document.querySelector(".desc");
//?Text ----------------------

//?Divs ----------------------
const introBody = document.querySelector(".intro-body");
const mainBody = document.querySelector(".main-body");
//?Divs ----------------------

//?Form && Input ----------------------
const formInput = document.querySelector(".form-input");
const inputNum = document.querySelector(".input-number");
//?Form && Input ----------------------

//?Buttons ----------------------
const btn = document.querySelector(".btn");
const reset = document.querySelector(".reset");
const start = document.querySelector(".start-btn");
//?Buttons ----------------------

//Lets apply the logic🚀

//! SECRET NUMBER
let secretNum = Math.trunc(Math.random() * 20) + 1;

//!START BUTTON
start.addEventListener("click", () => {
  mainBody.classList.remove("hidden");
  introBody.classList.add("hidden");
  const startAudio = new Audio("./sounds/click.mp3");
  startAudio.play();
});

//!FORM SUBMIT
formInput.addEventListener("submit", function (e) {
  e.preventDefault();

  //?Converting input value to number and trimming and getting a value
  let valueInput = Number(inputNum.value.trim());

  //?Warning a user to enter a number to the input
  if (valueInput === 0) {
    desc.textContent = "Iltimos raqam kiriting!";
    const wrongAudio = new Audio("./sounds/wrong.mp3");
    wrongAudio.play();

    //?Adding Shake animation class
    desc.classList.add("shake-element"); // Add shake effect
    setTimeout(() => {
      desc.classList.remove("shake-element"); // Remove shake effect after a short delay
    }, 500);
    return;
  }

  //!ChECKING THE VALUE WITH A INPUT VALUE
  if (valueInput === secretNum) {
    result.style.backgroundColor = "green";
    result.style.color = "white";
    result.textContent = valueInput;

    desc.textContent = `Tabriklayman siz o'ylangan sonni topdiz`;
    formInput.classList.add("hidden");
    reset.classList.add("reset-btn");
    //?Confetti effect
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti({
      emojis: [
        "😍",
        "🎉",
        "🎊",
        "✨",
        "🥳",
        "🎈",
        "🎉",
        "🪄",
        "🥓",
        "🥳",
        "🎁",
        "🎇",
        "✨",
        "🥳",
        "🥓",
        "🎉",
        "🌸",
        "🥓",
        "⭐",
        "✅",
        "🎉",
        "🥳",
        "🎉",
        "🥓",
      ],
    });

    //?Congrats Audio sound
    const correctAudio = new Audio("./sounds/win.MP3");
    correctAudio.play();
  } else if (valueInput > secretNum) {
    desc.textContent = `O'ylangan raqam ${valueInput} dan kichikroq`;
    //?Wrong audio
    const wrongAudio = new Audio("./sounds/wrong.mp3");
    wrongAudio.play();

    //?Adding Shake animation class
    desc.classList.add("shake-element"); // Add shake effect
    setTimeout(() => {
      desc.classList.remove("shake-element"); // Remove shake effect after a short delay
    }, 500); // Adjust the timeout value to match your animation duration
  } else {
    desc.textContent = `O'ylangan raqam ${valueInput} dan kattaroq`;
    //?Wrong Audio
    const wrongAudio = new Audio("./sounds/wrong.mp3");
    wrongAudio.play();

    //?Adding Shake animation class
    desc.classList.add("shake-element"); // Add shake effect
    setTimeout(() => {
      desc.classList.remove("shake-element"); // Remove shake effect after a short delay
    }, 500); // Adjust the timeout value to match your animation duration
  }
  inputNum.value = "";
});

//!RESET FUNCTION
function resetGame() {
  result.textContent = "?";
  result.style.backgroundColor = "";
  result.style.color = "";
  inputNum.value = "";
  desc.textContent = "";
  formInput.classList.remove("hidden");
  reset.classList.remove("reset-btn");

  //?Secret Number
  secretNum = Math.trunc(Math.random() * 20) + 1;

  //?Click audio
  const startAudio = new Audio("./sounds/click.mp3");
  startAudio.play();
}

//!RESET BUTTON
reset.addEventListener("click", resetGame);
