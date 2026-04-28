// ======================= DOM (Document Object Model) =======================

// DOM allows JavaScript to control HTML elements

// ======================= 1. SELECT ELEMENTS =======================

// Select element by ID
let text = document.getElementById("text");

// Select using querySelector (recommended)
let title = document.querySelector("#title");
let btn = document.querySelector("#btn");


// ======================= 2. CHANGE TEXT =======================

function changeText() {
    // Change text content
    text.innerText = "Text Changed!";
}


// ======================= 3. CHANGE HTML =======================

function changeHTML() {
    // Change inner HTML
    text.innerHTML = "<b>Bold Text</b>";
}


// ======================= 4. EVENT LISTENER =======================

if (btn) {
    btn.addEventListener("click", function() {
        alert("Button Clicked!");
        // Runs when button is clicked
    });
}


// ======================= 5. INPUT VALUE =======================

function showInput() {
    let input = document.getElementById("name");

    let value = input.value;
    // Get user input

    console.log(value);
}


// ======================= 6. LIVE INPUT (REAL-TIME) =======================

let inputField = document.getElementById("liveInput");

if (inputField) {
    inputField.addEventListener("input", function() {

        let value = inputField.value;

        document.getElementById("output").innerText = value;
        // Show text while typing
    });
}


// ======================= 7. STYLE CHANGE =======================

function changeStyle() {
    let el = document.getElementById("styleText");

    el.style.color = "red";
    el.style.fontSize = "30px";
}


// ======================= 8. CLASS MANIPULATION =======================

function toggleClass() {
    let el = document.getElementById("box");

    el.classList.toggle("active");
    // Add/remove class
}


// ======================= 9. COUNTER APP =======================

let count = 0;

let inc = document.getElementById("inc");
let dec = document.getElementById("dec");
let display = document.getElementById("count");

if (inc) {
    inc.addEventListener("click", function() {
        count++;
        display.innerText = count;
    });
}

if (dec) {
    dec.addEventListener("click", function() {
        count--;
        display.innerText = count;
    });
}