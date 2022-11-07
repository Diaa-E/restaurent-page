"use strict";

export function createContact()
{
    const divContact = document.createElement("div");
    divContact.classList.add("contact-form");

    const formContact = document.createElement("form");
    formContact.setAttribute("action", "");
    formContact.setAttribute("method", "post");

    const lblNameF = createLabel("nameF", "", "First Name");
    const lblNameL = createLabel("nameL", "", "Last Name");
    const lblPhone = createLabel("phone", "", "Phone Number");
    const lblEmail = createLabel("email", "required", "Email");
    const lblMsg = createLabel("message", "required", "Your Message");

    const txtNameF = createInput("nameF", "nameF", "text", false);
    const txtNameL = createInput("nameL", "nameL", "text", false);
    const txtPhone = createInput("phone", "phone", "tel", false);
    const txtEmail = createInput("email", "email", "email", true)
    txtNameF.setAttribute("minLength", "3");
    txtNameL.setAttribute("minLength", "3");

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

function createLabel(isFor = "", labelClass = "", labelText = "")
{
    const lbl = document.createElement("label");
    lbl.setAttribute("for", isFor);
    lbl.innerText = labelText;

    //class argument cannot be empty
    if (labelClass !== "")
    {
        lbl.classList.add(labelClass);
    }

    return lbl;
};

function createInput(inputId = "", inputName = "", inputType = "text", isRequired = false)
{
    const input = document.createElement("input");
    input.setAttribute("id", inputId);
    input.setAttribute("name", inputName);
    input.setAttribute("type", inputType);

    if (isRequired)
    {
        input.setAttribute("required", "");
    }

    return input;
};