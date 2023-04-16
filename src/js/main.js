// Import our custom CSS
// import '../scss/styles.scss'

import { Popover } from 'bootstrap';

// Import all of Bootstrap's JS

const items = [
    {
        "id": 1,
        "title": "title-1",
        "img": "p1.jpeg",
        "text": "dasdasdasdasd"
    },
    {
        "id": 2,
        "title": "title-2",
        "img": "p2.jpeg",
        "text": "dasdasdasd"
    },

    {
        "id": 3,
        "title": "title-3",
        "img": "p3.jpeg",
        "text": "dasdasdasd"
    }
];


const createElement = function (item) {
    // COL
    const col = document.createElement("div");
    col.className = "col";
    portfolio.appendChild(col);

    // BOX
    const box = document.createElement("div");
    box.className = "box";
    box.style.backgroundImage = `url('${item["img"]}')`;
    col.appendChild(box);

    // OVERLAY
    const overlay = document.createElement("div");
    overlay.className = "overlay";
    box.appendChild(overlay);

    // I
    const icon = document.createElement("i");
    icon.className = "fa-solid fa-plus click";
    overlay.appendChild(icon);
};

const portfolio = document.getElementById("portfolio");
portfolio.className = "row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4";

items.map((value) => createElement(value));

// JS FORM VALIDATION

// Function for display message and change border to error

const validStyle = function (el) {
    el.classList.remove('is-invalid');
    el.classList.add('is-valid');
}
const invalidStyle = function (el) {
    el.classList.add('is-invalid');
    el.classList.remove('is-valid');
}


const contact_form = document.getElementById("contact");

// Variables for checking email validating
const emailValidRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const email = document.getElementById('email');

// Variables for checking phone validating
const phoneValidRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
const phone = document.getElementById("phone");

// Variables for checking full name validating
const validName = /^[A-Za-z]+$/;
const fullname = document.getElementById("fullname");

// Message for invalid input
const message = document.getElementById('message');

contact_form.addEventListener('change', function (e) {
    console.log("the input: %s is changed to: %s", e.target.name, e.target.value);

    // Check if value of email/phone/name/message don't match validRegex
    if (e.target.name === "email") {
        if (!e.target.value.match(emailValidRegex)) {
            invalidStyle(email, "Invalid email");
        } else {
            validStyle(email, "valid email");
        }
    }
    if (e.target.name === "phone") {

        if (!e.target.value.match(phoneValidRegex)) {
            invalidStyle(phone);
        } else {
            validStyle(phone);
        }
    }
    if (e.target.name === "fullname") {
        if (!e.target.value.match(validName)) {
            invalidStyle(fullname);
        } else {
            validStyle(fullname);
        }
    }
    if (e.target.name === 'message') {
        if (e.target.value === '') {
            invalidStyle(message);
        } else {
            validStyle(message);
        }
    }
});