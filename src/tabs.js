"use strict";

import logo from "./images/logo.svg";

export function createStory()
{
    const divStory = document.createElement("div");
    divStory.classList.add("story");

    const imgLogo = new Image();
    imgLogo.src = logo;

    const div = document.createElement("div");

    const hTitle = document.createElement("h1");
    hTitle.innerText = "Even villains need healthy takeout";

    const pStory = document.createElement("p");
    pStory.innerText = "Premium & healthy food, all the way from the top of the mountain!";

    div.append(hTitle, pStory);
    divStory.append(imgLogo, div);

    return divStory;
};