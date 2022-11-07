"use strict";

import avatarDeadpool from "./images/deadpool.jpg";
import avatarTerminator from "./images/t-800.jpg";
import avatarShredder from "./images/shredder.jpg";

import "./dishes";
import "./style.css";

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