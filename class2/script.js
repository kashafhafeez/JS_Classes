//-------FUNCTION-----------
function greet() {
    console.log("Hello World");
    // This function prints Hello World
}

greet();
// Calling the function (run it)

///---Function with Parameters----
function greet(name) {
    console.log("Hello " + name);
    // 'name' is a parameter (input)
}

greet("Kashaf");
// Output: Hello Kashaf

greet("Ali");
// Output: Hello Ali

//-----Function with Return-----
function add(a, b) {
    return a + b;
    // Returns sum of two numbers
}

let result = add(5, 3);
// Store returned value

console.log(result);
// Output: 8

//---Arrow function----
const multiply = (a, b) => {
    return a * b;
    // Arrow function returning multiplication
};

console.log(multiply(4, 2));
// Output: 8




//////-----------ARRAYS-------------
let fruits = ["apple", "banana", "mango"];
// Array of strings

console.log(fruits);
// Print full array

//-----Access Values----
console.log(fruits[0]);
// First element: apple

///---update value--
console.log(fruits[1]);
// Second element: banana




/////-------arrays method---
let numbers = [1, 2, 3];

// Add element at end
numbers.push(4);
// numbers = [1,2,3,4]

// Remove last element
numbers.pop();
// numbers = [1,2,3]

// Add at start
numbers.unshift(0);
// numbers = [0,1,2,3]

// Remove from start
numbers.shift();
// numbers = [1,2,3]

console.log(numbers);


///--------Loop Through Array-----
let colors = ["red", "green", "blue"];

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
    // Print each color one by one
}





////======OBJECTS======
let user = {
    name: "Kashaf",
    age: 20,
    city: "Karachi"
};
// Object with properties

//---Access Object Data--
console.log(user.name);
// Access name

console.log(user.age);
// Access age