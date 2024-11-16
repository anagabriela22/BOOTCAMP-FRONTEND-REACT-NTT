/*
import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";

import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))

*/

// Obtener el botón
const toTopButton = document.getElementById("ui-to-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight / 2) {
    toTopButton.classList.add("active");
  } else {
    toTopButton.classList.remove("active");
  }
});
toTopButton.addEventListener("click", (e) => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const firstNavBarBox = document.querySelector(".seccionNavBarPage__box--first");
const navBarContainer = document.querySelector(".seccionNavBarPage");
window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    firstNavBarBox.classList.add("active--none");
    navBarContainer.classList.add("active");
  } else {
    firstNavBarBox.classList.remove("active--none");
    navBarContainer.classList.remove("active");
  }
});
