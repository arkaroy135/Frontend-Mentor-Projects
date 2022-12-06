const email = document.querySelector("#user_email");
const form = document.querySelector("#form");
const msz = document.querySelector(".error-messege");
const error = document.querySelector(".error");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (email.value === "") {
    msz.style.color = "hsl(0, 93%, 68%)";
    msz.innerText = "Woops! You forgot to provide any email-id";
    email.style.borderColor = "hsl(0, 93%, 68%)";
    // error.classList.remove("hidden");
    error.style.display = "block";
  } else if (!validateEmail(email.value)) {
    msz.style.color = "hsl(0, 93%, 68%)";
    msz.innerText = "Please provide a valid email-id";
    email.style.borderColor = "hsl(0, 93%, 68%)";
    error.style.display = "block";
  } else {
    msz.style.color = "green";
    msz.innerText = "Thank You. Your email has been registered with us.";
    email.value = "";
    email.style.borderColor = "";
    error.style.display = "none";
  }
});

function validateEmail() {
  let exp = /^[A-Za-z0-9._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,}$/;
  return exp.test(String(email.value).toLowerCase());
}
