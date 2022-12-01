const form = document.querySelector("#form");
const input = document.querySelectorAll("input");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const fname = form["firstname"].value;
  const lname = form["lastname"].value;
  const email = form["email"].value;
  const password = form["password"].value;

  if (fname === "") {
    addError("firstname", "First Name must not be empty");
  } else {
    remError("firstname");
  }

  if (lname === "") {
    addError("lastname", "Last Name must not be empty");
  } else {
    remError("lastname");
  }

  if (email === "") {
    addError("email", "Email field must not be empty");
  } else if (!validateEmail(email)) {
    addError(
      "email",
      "Looks like this is not an email. valid input-> name@host.tld"
    );
  } else {
    remError("email");
  }

  if (password === "") {
    addError("password", "Password must not be empty");
  } else {
    remError("password");
  }
});

function addError(field, message) {
  const alerm = form[field].parentNode;
  const img = alerm.querySelector("img");
  const small = alerm.querySelector("small");
  small.innerText = message;
  img.style.display = "block";
  small.style.display = "block";
}

function remError(field) {
  const alerm = form[field].parentNode;
  const img = alerm.querySelector("img");
  const small = alerm.querySelector("small");
  img.style.display = "none";
  small.style.display = "none";
}

function validateEmail(email) {
  let exp = /^[A-Za-z0-9._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,}$/;
  return exp.test(String(email).toLowerCase());
}
