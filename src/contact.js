"use strict";

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
    lblEmail.setAttribute("for", "email");
    lblEmail.classList.add("required");
    lblEmail.innerText = "Email";

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