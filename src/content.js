"use strict";

import logo from "./images/logo.svg"; //logo is equal to the path
import "./style.css";

export function createHeader(){

    const divHeader = document.createElement("div");
    divHeader.classList.add("header");
    const imgLogo = new Image(); //instead of creating an element with "img"
    const btnStory = document.createElement("button");
    btnStory.classList.add("button", "button-tab", "active-tab");
    const btnDishes = document.createElement("button");
    btnDishes.classList.add("button", "button-tab");
    const btnContact = document.createElement("button");
    btnContact.classList.add("button", "button-tab");

    btnStory.innerText = "OUR STORY";
    btnDishes.innerText = "SPECIAL DISHES";
    btnContact.innerText = "CONTACT US";

    btnStory.setAttribute("data-index", "0");
    btnDishes.setAttribute("data-index", "1");
    btnContact.setAttribute("data-index", "2");

    imgLogo.src = logo;
    imgLogo.setAttribute("alt", "Villain Takeout logo");

    divHeader.append(imgLogo, btnStory, btnDishes, btnContact);
    

    return divHeader;
};