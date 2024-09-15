import "./styles.css";
import { mainDiv } from "./home.js";

let homeBtn = document.querySelector(".home");
let displayContainer = document.getElementById("content");

homeBtn.addEventListener("click", ()=> {
    displayContainer.textContent = "";
    displayContainer.appendChild(mainDiv);
})