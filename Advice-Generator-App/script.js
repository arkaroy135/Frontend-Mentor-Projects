generator.addEventListener("click", () => {
  fetch("https://api.adviceslip.com/advice", { cache: "no-store" })
    .then((response) => response.json())
    .then((data) => {
      advice_number.innerText = data.slip.id;
      advice.innerText = data.slip.advice;
    });
});
