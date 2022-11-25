const q1 = document.querySelector("#q1");
const q2 = document.querySelector("#q2");
const q3 = document.querySelector("#q3");
const q4 = document.querySelector("#q4");
const q5 = document.querySelector("#q5");
const a1 = document.querySelector("#arrow1");
const a2 = document.querySelector("#arrow2");
const a3 = document.querySelector("#arrow3");
const a4 = document.querySelector("#arrow4");
const a5 = document.querySelector("#arrow5");
const qa1 = document.querySelector("#q1-ans");
const qa2 = document.querySelector("#q2-ans");
const qa3 = document.querySelector("#q3-ans");
const qa4 = document.querySelector("#q4-ans");
const qa5 = document.querySelector("#q5-ans");

q1.addEventListener("click", () => {
  qa1.classList.toggle("hidden");
  a1.classList.toggle("rotate");
  qa2.classList.add("hidden");
  qa3.classList.add("hidden");
  qa4.classList.add("hidden");
  qa5.classList.add("hidden");
});

q2.addEventListener("click", () => {
  qa2.classList.toggle("hidden");
  a2.classList.toggle("rotate");
  qa1.classList.add("hidden");
  qa3.classList.add("hidden");
  qa4.classList.add("hidden");
  qa5.classList.add("hidden");
});

q3.addEventListener("click", () => {
  qa3.classList.toggle("hidden");
  a3.classList.toggle("rotate");
  qa1.classList.add("hidden");
  qa2.classList.add("hidden");
  qa4.classList.add("hidden");
  qa5.classList.add("hidden");
});

q4.addEventListener("click", () => {
  qa4.classList.toggle("hidden");
  a4.classList.toggle("rotate");
  qa1.classList.add("hidden");
  qa2.classList.add("hidden");
  qa3.classList.add("hidden");
  qa5.classList.add("hidden");
});

q5.addEventListener("click", () => {
  qa5.classList.toggle("hidden");
  a5.classList.toggle("rotate");
  qa1.classList.add("hidden");
  qa2.classList.add("hidden");
  qa3.classList.add("hidden");
  qa4.classList.add("hidden");
});
