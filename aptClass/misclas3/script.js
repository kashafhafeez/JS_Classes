// alert("Welcome to my website");
// alert("hello world")

// let name =  prompt("Enter your Name");
// let age = prompt("Enter your age");

// document.write("<p>Name : "+ name +"</p>")
// document.write("<p>Age : "+ age +"</p>")


// confirm();



// let num1 = prompt("Enter your first Number"); 
// let num2 = prompt("Enter your Second number");

// let total = parseInt(num1) + parseInt(num2); 

// document.write("Sum: "+ total);

document.write("<h1>Conditions</h1>")

// if(10 > 11){
//     //result
//     document.write("Condition is true")
// }

let number = 0;

// if(number > 0){
//     document.write(number +" is positive")
// }
// else{
//     document.write(number +" is negative")
// }

if(number > 0 ){
    document.write(number +" is positive")
}
else if(number < 0){
    document.write(number +" is negative")
}
else{
    document.write("Number is Zero")
}





let studentName = "Raza"
let Class = "10";
let english = 55;
let computer = 33;
let science = 12; 
let total = english + computer+ science;
let percentage = total / 300 *100;

document.write("<p>Student Name: "+studentName+"</p>");
document.write("<p>Class: "+Class+"</p>");
document.write("<p>English Marks: "+english+"</p>");
document.write("<p>Computer Marks: "+computer+"</p>");
document.write("<p>Science Marks: "+science+"</p>");
document.write("<p>Total : "+total+"</p>")
document.write("<p>Percentage : "+ Math.round(percentage) +"</p>")

if(percentage >=80){
    document.write("Grade: A1")
}
else if(percentage >= 70){
    document.write("Grade: A")
}
else if(percentage >= 60){
    document.write("Grade: B")
}
else if(percentage >= 50){
    document.write("Grade: C")
}
else if(percentage >= 40){
    document.write("Grade: D")
}
else{
    document.write("Grade F")
}
document.write("<br>")


let text = "Atech"; 

if(text == "Aptech"){
    document.write(text + " learning")
}
document.write("<br>")



let num = 10; 

if(num === 10){
    document.write(num)
}