"use strict";

import logo from "./images/logo.svg"; //logo is equal to the path
import avatarDeadpool from "./images/deadpool.jpg";
import avatarTerminator from "./images/t-800.jpg";
import avatarShredder from "./images/shredder.jpg";

import "./style.css";

export function createHeader()
{
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

export function createTestimonials()
{
    const testimonials = [
        {
            name: "Deadpool",
            path: avatarDeadpool,
            comment: "The taste of maximum effort",
            sign: `-Deadpool`,
            alt:`deadpool's avatar`,
        },
        {
            name: "The Terminator",
            path: avatarTerminator,
            comment: "Affirmative",
            sign: `-The Terminator`,
            alt: `The Terminator's avatar`,
        },
        {
            name: "Shredder",
            path: avatarShredder,
            comment: "Haven't tasted anything like it in more than 500 years.",
            sign: `-Shredder`,
            alt: `Shredder's avatar`,
        }
    ];
    const divTestContainer = document.createElement("div");
    divTestContainer.classList.add("testimonial-container");

    const hTitle = document.createElement("h2");
    hTitle.innerText = "But don't just take our word for it";

    divTestContainer.appendChild(hTitle);

    for (let i = 0; i < testimonials.length; i++)
    {
        const img = new Image();
        img.src = testimonials[i].path;
        img.setAttribute("alt", testimonials[i].alt);

        const p = document.createElement("p");
        p.innerText = testimonials[i].comment;

        const sign = document.createElement("h3");
        sign.innerText = testimonials[i].sign;

        const divText = document.createElement("div");
        divText.append(p, sign);

        divTestContainer.append(img, divText);
    }

    return divTestContainer
};