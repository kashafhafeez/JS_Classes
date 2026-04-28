

document.write('<h1>Condition..</h1>');

let username = prompt("Enter your user name");
let password = prompt("Enter your password");

if(username == "admin" && password == "1234" || username == "Ali" && password == "abc"){
    alert("Login Successfully");
}
else{
    alert("Invalid username or password");

}

let user = ""

if(user != ""){
    document.write("Name: "+ user)
}


document.write('<h1>Short hand condition ..</h1>');

let name = "Ali hyder"
let pass = 123

let output =  name == "Ali" && pass == 123 ? "Login Successfully" : "Invalid credentails";

document.write(output);

let x = -90; 

let result = x > 0 ? "This number is greater than zero": "This number is less than zero"

document.write("<p>"+result+"</p>")

