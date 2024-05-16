const formInput = document.querySelector(".form-input");
const inputNum = document.querySelector(".input-number");
const result = document.querySelector(".result");
const desc = document.querySelector(".desc");
const btn = document.querySelector(".btn");
const reset = document.querySelector(".reset");
const start = document.querySelector(".start-btn");
const introBody = document.querySelector(".intro-body");
const mainBody = document.querySelector(".main-body");
let secretNum = Math.trunc(Math.random() * 20) + 1;
console.log(secretNum);

start.addEventListener("click", () => {
  mainBody.classList.remove("hidden");
  introBody.classList.add("hidden");
  const startAudio = new Audio("./sounds/click.mp3");
  startAudio.play();
});

formInput.addEventListener("submit", function (e) {
  e.preventDefault();

  let valueInput = Number(inputNum.value.trim());

  if (valueInput === 0) {
    desc.textContent = "Iltimos raqam kiriting!";
    const wrongAudio = new Audio("./sounds/wrong.mp3");
    wrongAudio.play();
    desc.classList.add("shake-element"); // Add shake effect
    setTimeout(() => {
      desc.classList.remove("shake-element"); // Remove shake effect after a short delay
    }, 500);
    return;
  }

  if (valueInput === secretNum) {
    result.style.backgroundColor = "green";
    result.style.color = "white";
    result.textContent = valueInput;

    desc.textContent = `Tabriklayman siz o'ylangan sonni topdiz`;
    formInput.classList.add("hidden");
    reset.classList.add("reset-btn");
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

    const correctAudio = new Audio("./sounds/win.MP3");
    correctAudio.play();
  } else if (valueInput > secretNum) {
    desc.textContent = `O'ylangan raqam ${valueInput} dan kichikroq`;
    const wrongAudio = new Audio("./sounds/wrong.mp3");
    wrongAudio.play();
    desc.classList.add("shake-element"); // Add shake effect
    setTimeout(() => {
      desc.classList.remove("shake-element"); // Remove shake effect after a short delay
    }, 500); // Adjust the timeout value to match your animation duration
  } else {
    desc.textContent = `O'ylangan raqam ${valueInput} dan kattaroq`;
    const wrongAudio = new Audio("./sounds/wrong.mp3");
    wrongAudio.play();
    desc.classList.add("shake-element"); // Add shake effect
    setTimeout(() => {
      desc.classList.remove("shake-element"); // Remove shake effect after a short delay
    }, 500); // Adjust the timeout value to match your animation duration
  }
  inputNum.value = "";
});

function resetGame() {
  result.textContent = "?";
  result.style.backgroundColor = "";
  result.style.color = "";
  inputNum.value = "";
  desc.textContent = "";
  formInput.classList.remove("hidden");
  reset.classList.remove("reset-btn");
  console.log("im");
  secretNum = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNum);
  const startAudio = new Audio("./sounds/click.mp3");
  startAudio.play();
}

reset.addEventListener("click", resetGame);
