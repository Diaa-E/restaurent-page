"use strict";

import { createHeader, createTestimonials } from "./content";

const divContent = document.querySelector("#content");

divContent.appendChild(createHeader());
divContent.appendChild(createTestimonials());