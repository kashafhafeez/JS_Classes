

// 1
let num = prompt("Enter a number:");



if (num % 2 === 0) {
    alert(num + " is Even");
} else {
    alert(num + " is Odd");
}


// 2
for (let i = 1; i <= 100; i++) {
    let number = (i % 2 === 0) ? "Even" : "Odd";
    document.write('<br>')
    document.write('<br>')
    document.write(i + " is " + number);
}

// 3
for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        document.write(i + "<br>" );
    }
}

// 4
let one = 12;
let two = 2;
let three = 22;

let smallest;

if (one <= two && one <= three) {
    smallest = one;
} else if (two <= one && two <= three) {
    smallest = two;
} else {
    smallest = three;
}

document.write("Smallest number is: " + smallest);


// 5

let array = [10, 50, 70, 65, 34, 87, 29];
let sum = 0;


for (let i = 0; i < array.length; i++) {
    sum += array[i]; 
}

document.write("The sum of all the elements is: " + sum);



// 6
for (let i = 4; i >= 1; i--) {
  let pattern = "";
  for (let j = 1; j <= i; j++) {
    pattern += "*";
  }
  console.log(pattern);
}
