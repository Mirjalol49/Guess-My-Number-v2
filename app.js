// Getting elements
const result = document.querySelector(".result");
const desc = document.querySelector(".desc");
const introBody = document.querySelector(".intro-body");
const mainBody = document.querySelector(".main-body");
const formInput = document.querySelector(".form-input");
const inputNum = document.querySelector(".input-number");
const btn = document.querySelector(".btn");
const reset = document.querySelector(".reset");
const start = document.querySelector(".start-btn");

// Secret number and attempt count
let secretNum = Math.trunc(Math.random() * 20) + 1;
let count = 0;

// Start button logic
start.addEventListener("click", () => {
  mainBody.classList.remove("hidden");
  introBody.classList.add("hidden");
  const startAudio = new Audio("./sounds/click.mp3");
  startAudio.play();
});

// Form submit logic
formInput.addEventListener("submit", function (e) {
  e.preventDefault();
  let valueInput = Number(inputNum.value.trim());

  // Input validation
  if (!valueInput || valueInput > 20) {
    desc.textContent =
      valueInput > 20
        ? "Faqat 1 va 20 orasidagi raqamlarni kirita olasiz xolos!"
        : "Iltimos raqam kiriting!";
    const wrongAudio = new Audio("./sounds/wrong.mp3");
    wrongAudio.play();
    inputNum.value = "";
    desc.classList.add("shake-element");
    setTimeout(() => desc.classList.remove("shake-element"), 500);
    return;
  }

  // Incrementing count
  count++;

  // Checking the input value
  if (valueInput === secretNum) {
    result.style.backgroundColor = "green";
    result.style.color = "white";
    result.textContent = valueInput;
    alert(`You found it in ${count} attempts!`);
    desc.textContent = "Tabriklayman siz o'ylangan sonni topdiz";
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
  } else {
    desc.textContent =
      valueInput > secretNum
        ? `O'ylangan raqam ${valueInput} dan kichikroq`
        : `O'ylangan raqam ${valueInput} dan kattaroq`;
    const wrongAudio = new Audio("./sounds/wrong.mp3");
    wrongAudio.play();
    desc.classList.add("shake-element");
    setTimeout(() => desc.classList.remove("shake-element"), 500);
  }

  // Clear input field
  inputNum.value = "";
});

// Reset function
function resetGame() {
  result.textContent = "?";
  result.style.backgroundColor = "";
  result.style.color = "";
  inputNum.value = "";
  desc.textContent = "";
  formInput.classList.remove("hidden");
  reset.classList.remove("reset-btn");
  secretNum = Math.trunc(Math.random() * 20) + 1;
  const startAudio = new Audio("./sounds/click.mp3");
  startAudio.play();
}

// Reset button logic
reset.addEventListener("click", resetGame);
