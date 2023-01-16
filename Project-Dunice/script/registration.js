const signUp = (e) => {
  let fname = document.getElementById("fname").value,
    institute = document.getElementById("institute").value,
    email = document.getElementById("email").value,
    pwd = document.getElementById("pwd").value;

  let formData = JSON.parse(localStorage.getItem("formData")) || [];

  let exist =
    formData.length &&
    JSON.parse(localStorage.getItem("formData")).some(
      (data) =>
        data.fname.toLowerCase() == fname.toLowerCase() &&
        data.institute.toLowerCase() == institute.toLowerCase()
    );

  if (!exist) {
    formData.push({ fname, institute, email, pwd });
    localStorage.setItem("formData", JSON.stringify(formData));
    document.querySelector("form").reset();
    document.getElementById("fname").focus();
    alert("Аккаунт создан.\n\nВойдите, вернувшись назад");
  } else {
    alert("Аккаунт с такими данными уже зарегистрирован");
  }
  e.preventDefault();
};

function signIn(e) {
  let email = document.getElementById("email").value,
    pwd = document.getElementById("pwd").value;
  let formData = JSON.parse(localStorage.getItem("formData")) || [];
  let exist =
    formData.length &&
    JSON.parse(localStorage.getItem("formData")).some(
      (data) =>
        data.email.toLowerCase() == email && data.pwd.toLowerCase() == pwd
    );
  if (!exist) {
    alert("Данные введены неверно");
  } else {
    location.href = "/";
  }
  e.preventDefault();
}
