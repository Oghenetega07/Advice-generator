const adviceId = document.getElementById("advice-id");
const adviceText = document.querySelector(".advice-text");
const diceBtn = document.getElementById("dice-btn");

async function getAdvice() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");

    const data = await response.json();

    adviceId.textContent = data.slip.id;

    adviceText.textContent = `"${data.slip.advice}"`;
  } catch (error) {
    adviceText.textContent = "Unable to fetch advice. Please try again.";

    console.error(error);
  }
}

diceBtn.addEventListener("click", getAdvice);

getAdvice();