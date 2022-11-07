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
    btnLeft.innerText = "<";

    btnLeft.addEventListener("click", (e)=> {
        switchDish(imgDish, pDish, e.target.getAttribute("data-direction"));
    });

    const btnRight = document.createElement("button");
    btnRight.classList.add("button", "button-invis", "button-right");
    btnRight.setAttribute("data-direction", "1");
    btnRight.innerText = ">";

    btnRight.addEventListener("click", (e)=> {
        switchDish(imgDish, pDish, e.target.getAttribute("data-direction"));
    });

    const imgDish = new Image();

    //initialize dish menu
    //0 is to avoid incrementing
    switchDish(imgDish, pDish, 0);

    divDishImg.append(btnLeft, imgDish, btnRight);
    divDishes.append(pDish, divDishImg);

    return divDishes;
};

export function createContact()
{
    const divContact = document.createElement("div");
    divContact.classList.add("contact-form");

    const formContact = document.createElement("form");
    formContact.setAttribute("action", "");
    formContact.setAttribute("method", "post");

    const lblNameF = document.createElement("label");
    lblNameF.setAttribute("for", "nameF");
    lblNameF.innerText = "First Name";

    const lblNameL = document.createElement("label");
    lblNameL.setAttribute("for", "nameL");
    lblNameL.innerText = "Last Name";

    const lblPhone = document.createElement("label");
    lblPhone.setAttribute("for", "phone");
    lblPhone.innerText = "Phone Number";

    const lblEmail = document.createElement("label");
    lblEmail.setAttribute("for", "phone");
    lblEmail.classList.add("required");
    lblEmail.innerText = "Phone Number";

    const lblMsg = document.createElement("label");
    lblMsg.setAttribute("for", "message");
    lblMsg.classList.add("required");
    lblMsg.innerText = "Your Message";

    const txtNameF = document.createElement("input");
    txtNameF.setAttribute("type", "text");
    txtNameF.setAttribute("id", "nameF");
    txtNameF.setAttribute("name", "nameF");
    txtNameF.setAttribute("minLength", "3");

    const txtNameL = document.createElement("input");
    txtNameL.setAttribute("type", "text");
    txtNameL.setAttribute("id", "nameL");
    txtNameL.setAttribute("name", "nameL");
    txtNameL.setAttribute("minLength", "3");

    const txtPhone = document.createElement("input");
    txtPhone.setAttribute("type", "tel");
    txtPhone.setAttribute("name", "phone");
    txtPhone.setAttribute("id", "phone");

    const txtEmail = document.createElement("input");
    txtEmail.setAttribute("type", "email");
    txtEmail.setAttribute("name", "email");
    txtEmail.setAttribute("id", "email");
    txtEmail.setAttribute("required", "");

    const txtMsg = document.createElement("textarea");
    txtMsg.setAttribute("required", "");
    txtMsg.setAttribute("name", "message");
    txtMsg.setAttribute("id", "message");
    txtMsg.setAttribute("cols", "30");
    txtMsg.setAttribute("rows", "10");

    const btnSubmit = document.createElement("button");
    btnSubmit.classList.add("button", "button-empty");
    btnSubmit.setAttribute("type", "submit");
    btnSubmit.innerText = "Send";

    formContact.append(
        lblNameF,
        txtNameF,
        lblNameL,
        txtNameL,
        lblPhone,
        txtPhone,
        lblEmail,
        txtEmail,
        lblMsg,
        txtMsg,
        btnSubmit
    )

    divContact.append(formContact);

    return divContact;
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