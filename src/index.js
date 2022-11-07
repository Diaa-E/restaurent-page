"use strict";

import {createTestimonials } from "./testimonails";
import { createHeader } from "./header";
import { createDishes } from "./dishes";
import { createStory } from "./story";
import {createContact} from "./contact";

initPage();

function initPage()
{
    const divContent = document.querySelector("#content");

    const divHeader = document.createElement("div");
    divHeader.setAttribute("id", "header");
    divHeader.append(createHeader());

    const divTabContent = document.createElement("div");
    divTabContent.setAttribute("id", "tabContent");
    divTabContent.append(createStory());

    const divTestimonial = document.createElement("div");
    divTestimonial.setAttribute("id", "testimonial");
    divTestimonial.append(createTestimonials());

    divContent.append(
        divHeader,
        divTabContent,
        divTestimonial,
    );

    const tabButtons = document.querySelectorAll(".header> button");

    tabButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {

            tabButtons.forEach(button => {
                button.classList.remove("active-tab");
            });

            e.target.classList.add("active-tab");

            switchTab(+e.target.getAttribute("data-index"));

        });
    });
};

function switchTab(index, btnList)
{
    const div = document.querySelector("#tabContent");
    div.innerHTML = "";

    switch(index)
    {
        case 0:
            div.append(createStory());
            return;
        case 1:
            div.append(createDishes());
            return
        case 2:
            div.append(createContact());
            return
    }
}

