//index.js
import _, { head } from 'lodash';
import './style.css';
import myImage from "./resources/burger.jpg";
import Home from "./home.js";
import homePage from './home.js';
import menuPage from './menu.js';
import contactPage from './contactUs.js';




const home = document.querySelector(".Home");
const menu = document.querySelector(".Menu");
const contactUs = document.querySelector(".ContactUs")
const content = document.querySelector(".content");

contactUs.addEventListener("click",contactPage);
home.addEventListener("click",homePage);
menu.addEventListener("click",menuPage);

function defaultPage(){

    content.style.backgroundColor = "black";
    
    const welcomeText = document.createElement("div");
    welcomeText.style.display = "flex";
    welcomeText.style.flexDirection = "column";
    welcomeText.style.justifyContent = "center";
    welcomeText.style.alignItems = "center";
    welcomeText.style.marginRight = "10rem";


    const heading = document.createElement("h1");
    heading.textContent = "Welcome to BistroBurger!"
    heading.setAttribute("style","margin:5rem")
    const paragraph = document.createElement("p");
    paragraph.textContent = "Where classic comfort meets culinary delight. Our burgers are crafted with love, fresh ingredients, and a passion for good food. Whether you're here for a quick bite or a leisurely meal, we promise to serve you the best burger experience in town. Sit back, relax, and savor the flavors of Bistro Burger."
    paragraph.setAttribute("style","color:white; width:25vw; font-size:1.5rem; font-weight:500");

    const image = document.createElement("img");
    image.classList.add("content");
    image.setAttribute("style","width:45vw; height:70vh; opacity: 0.6; border: 0.5px solid white; padding:10px; object-fit:cover;");
    image.src = myImage;


    welcomeText.appendChild(heading);
    welcomeText.appendChild(paragraph);
    content.appendChild(welcomeText);
    content.appendChild(image);
}

function resetPage(){
    content.innerHTML = "";
    
}


defaultPage();


export { resetPage , defaultPage , content};