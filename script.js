let pickRandomChoice = () => {
  const choicesInput = document.getElementById("choices");
  const resultElement = document.getElementById("result");

  const choices = choicesInput.value.split(",").map((choice) => choice.trim());

  if (choices.length === 0 || (choices.length === 1 && choices[0] === "")) {
    resultElement.textContent =
      "Por favor, introduzca sus opciones para obtener una elección aleatoria.";
  } else {
    const randomIndex = Math.floor(Math.random() * choices.length);
    const randomChoice = choices[randomIndex];
    resultElement.textContent = `Random Choice: ${randomChoice}`;
  }
};

const pickButton = document.getElementById("pickButton");

if (pickButton) {
  pickButton.addEventListener("click", pickRandomChoice);
}
