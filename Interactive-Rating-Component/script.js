const ratingCard = document.querySelector("#rating-card");
const thanks = document.querySelector("#thank-you-card");
const submit = document.getElementById("submit");
const ratingAgain = document.getElementById("rate-again");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerText = rate.innerText;
  });
});

submit.addEventListener("click", () => {
  if (!rating.innerText) return alert(`Please Give Your Rating First`);
  thanks.classList.toggle("hidden");
  ratingCard.classList.toggle("hidden");
});

ratingAgain.addEventListener("click", () => {
  thanks.classList.toggle("hidden");
  ratingCard.classList.toggle("hidden");
  rating.innerText = "";
});
