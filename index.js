import "./styles.css";
import { homeDiv } from "./home.js";
import { menuDiv } from "./menu.js";
import { contactDiv } from "./contact.js";
import { aboutDiv } from "./about.js";


let displayContainer = document.getElementById("content");
let homeBtn = document.querySelector(".home");
let menuBtn = document.querySelector(".menu");
let aboutBtn = document.querySelector(".about");
let contactBtn = document.querySelector(".contact");


homeBtn.addEventListener("click", ()=> {
    displayContainer.textContent = "";
    displayContainer.appendChild(homeDiv);
})

menuBtn.addEventListener("click", ()=> {
    displayContainer.textContent = "";
    displayContainer.appendChild(menuDiv);
})

aboutBtn.addEventListener("click", ()=> {
    displayContainer.textContent = "";
    displayContainer.appendChild(contactDiv);
})

contactBtn.addEventListener("click", ()=> {
    displayContainer.textContent = "";
    displayContainer.appendChild(aboutDiv);
})