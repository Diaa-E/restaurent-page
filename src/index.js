"use strict";

import { createHeader, createTestimonials } from "./content";
import { createStory, createDishes } from "./tabs";

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
}