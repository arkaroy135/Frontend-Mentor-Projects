const email = document.querySelector("#email-id");
const msz = document.querySelector(".error_messege");
const btn = document.querySelector(".notify");
const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (email.value === "") {
    msz.innerText = "Whoops! It looks like you forgot to add your email";
    email.style.borderColor = "hsl(354, 100%, 66%)";
    msz.style.color = "hsl(354, 100%, 66%)";
  } else if (!validateEmail(email.value)) {
    msz.innerText = "Please provide a valid email address";
    email.style.borderColor = "hsl(354, 100%, 66%)";
    msz.style.color = "hsl(354, 100%, 66%)";
  } else {
    msz.innerText = "Thank You. You will Get Email Updates.";
    email.style.borderColor = "";
    msz.style.color = "green";
    email.value = "";
  }
});

function validateEmail() {
  let exp = /^[A-Za-z0-9._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,}$/;
  return exp.test(String(email.value).toLowerCase());
}
