// ======================= CLASS 4 =======================
// ========== FORMS + VALIDATION + ADVANCED DOM ==========


// ======================= 1. FORM SUBMIT =======================

// Select form
let form = document.getElementById("form");

if(form){
    form.addEventListener("submit", function(e){

        e.preventDefault(); 
        // Prevent page reload

        console.log("Form Submitted");
    });
}


// ======================= 2. GET FORM DATA =======================

function getFormData(){

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    console.log("Name: " + name);
    console.log("Email: " + email);
}


// ======================= 3. BASIC VALIDATION =======================

function validateForm(){

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if(name === "" || email === ""){
        alert("All fields are required!");
        // Show error if empty
        return false;
    }

    alert("Form is valid!");
    return true;
}


// ======================= 4. EMAIL VALIDATION =======================

function validateEmail(){

    let email = document.getElementById("email").value;

    if(!email.includes("@")){
        alert("Invalid Email");
        return false;
    }

    alert("Valid Email");
    return true;
}


// ======================= 5. SHOW ERROR ON PAGE =======================

function showError(){

    let name = document.getElementById("name").value;
    let error = document.getElementById("error");

    if(name === ""){
        error.innerText = "Name is required";
        // Show error message
    }else{
        error.innerText = "";
    }
}


// ======================= 6. ADVANCED DOM (CREATE ELEMENT) =======================

function addItem(){

    let ul = document.getElementById("list");

    let li = document.createElement("li");
    // Create new list item

    li.innerText = "New Item";

    ul.appendChild(li);
    // Add item to list
}


// ======================= 7. REMOVE ELEMENT =======================

function removeItem(){

    let ul = document.getElementById("list");

    if(ul.lastChild){
        ul.removeChild(ul.lastChild);
        // Remove last item
    }
}


// ======================= 8. TO-DO MINI LOGIC =======================

function addTodo(){

    let input = document.getElementById("todoInput");
    let value = input.value;

    if(value === ""){
        alert("Enter something");
        return;
    }

    let li = document.createElement("li");
    li.innerText = value;

    document.getElementById("todoList").appendChild(li);

    input.value = "";
    // Clear input
}


// ======================= 9. CLICK EVENT ON CREATED ITEMS =======================

document.addEventListener("click", function(e){

    if(e.target.tagName === "LI"){
        e.target.style.textDecoration = "line-through";
        // Mark as completed
    }

});