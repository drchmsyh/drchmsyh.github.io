//Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

//NavbarFixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  if (window.pageYOffset >= fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");
darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}

//form to spreadsheet google form
const scriptURL =
  "https://script.google.com/macros/s/AKfycbz3mB0V3kZSxeE8JIVNRaZQFomWIaKPJxiAIVNefjsBsk0V1zN5TacW89htCrwjvrD1/exec";
const form = document.forms["drchm-form-to-google-sheet"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".alert");
const closeMyAlert = document.querySelector(".close-alert");
closeMyAlert.addEventListener("click", function (e) {
  myAlert.classList.toggle("hidden");
});
form.addEventListener("submit", (e) => {
  e.preventDefault();

  //ketika button send di click
  //tampil loading, hilang send
  btnLoading.classList.toggle("hidden");
  btnKirim.classList.toggle("hidden");

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      //tampil button send loading, hilang loading
      btnLoading.classList.toggle("hidden");
      btnKirim.classList.toggle("hidden");
      //tampil alert
      myAlert.classList.toggle("hidden");
      //resetform
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
