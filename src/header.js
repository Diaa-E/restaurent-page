"use strict";

import logo from "./images/logo.svg";

export function createHeader()
{
    const divHeader = document.createElement("div");
    divHeader.classList.add("header");
    const imgLogo = new Image(); //instead of creating an element with "img"

    //split into 2 arrays to be able to use spread operator
    const tabButtons = [];

    const tabButtonsText = [
        "OUR STORY",
        "SPECIAL DISHES",
        "CONTACT US",
    ];

    for (let i = 0; i < tabButtonsText.length; i++)
    {
        tabButtons.push(document.createElement("button"));
        tabButtons[i].classList.add("button", "button-tab");
        tabButtons[i].setAttribute("data-index", `${i}`);
        tabButtons[i].innerText = tabButtonsText[i];

        //activate first tab by default
        if (i === 0) tabButtons[i].classList.add("active-tab");
    };

    imgLogo.src = logo;
    imgLogo.setAttribute("alt", "Villain Takeout logo");

    divHeader.append(imgLogo, ...tabButtons);
    

    return divHeader;
};