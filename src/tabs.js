"use strict";

import logo from "./images/logo.svg";

import oatmeal from "./images/oatmeal.jpg";
import iceCream from "./images/ice-cream.jpg";
import steak from "./images/steak.jpg";
import pasta from "./images/pasta.jpg";

let currentDish = 0;

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

export function createDishes()
{
    const divDishes = document.createElement("div");
    divDishes.classList.add("dishes");

    const pDish = document.createElement("p");
    pDish.setAttribute("id", "dishName");

    const divDishImg = document.createElement("div");
    divDishImg.classList.add("dish-images");

    const btnLeft = document.createElement("button");
    btnLeft.classList.add("button", "button-invis", "button-left");
    btnLeft.setAttribute("data-direction", "-1");

    btnLeft.addEventListener("click", (e)=> {
        switchDish(imgDish, pDish, e.target.getAttribute("data-direction"));
    });

    const btnRight = document.createElement("button");
    btnRight.classList.add("button", "button-invis", "button-right");
    btnRight.setAttribute("data-direction", "1");

    btnRight.addEventListener("click", (e)=> {
        switchDish(imgDish, pDish, e.target.getAttribute("data-direction"));
    });

    const imgDish = new Image();

    //initialize dish menu
    //0 is to avoid incrementing
    switchDish(imgDish, pDish, 0);

    divDishImg.append(btnLeft, imgDish, btnRight);
    divDishes.append(pDish, divDishImg);
};

function switchDish(img, p, direction)
{
    const dishes = [
        {
            name: "Blueberry Oatmeal",
            alt: "Image of a bowl of blueberry oatmeal",
            imgPath: oatmeal,
        },
        {
            name: "Steak",
            alt: "image of a Steak steak",
            imgPath: steak,
        },
        {
            name: "Red Sauce Pasta",
            alt: "Image of a plate of red sauce pasta",
            imgPath: pasta,
        },
        {
            name: "Ice Cream",
            alt: "Image of a bowl of ice cream",
            imgPath: iceCream,
        },
    ];

    if (currentDish + direction > dishes.length -1)
    {
        currentDish = 0;
    }
    else if (currentDish + direction < 0)
    {
        currentDish = dishes.length -1;
    }
    else
    {
        currentDish += direction;
    }

    img.src = dishes[currentDish].imgPath;
    img.alt = dishes[currentDish].alt;
    p.innerText = dishes[currentDish].name;
};