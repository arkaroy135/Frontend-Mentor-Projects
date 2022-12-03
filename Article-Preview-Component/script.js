const options = document.querySelector("#share-options");
const btn = document.querySelector("#share-button");

btn.addEventListener("click", () => {
  options.classList.toggle("hidden");
});
