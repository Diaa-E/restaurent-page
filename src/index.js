"use strict";

import { createHeader, createTestimonials } from "./content";
import { createStory, createDishes, createContact } from "./tabs";

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

            switchTab(+e.target.getAttribute("data-index"));

        });
    });
};

function switchTab(index)
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

