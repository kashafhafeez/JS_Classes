// document.write('<h1>While LOOP</h1>');


// let i = 1
// while(i <= 5){
//     document.write("Aptech");
//     i++
// }

// document.write('<h1>Do While LOOP</h1>');

// let j= 1
// do{
//     document.write(j+" AAA <br>");
//     j++
// }
// while(j <6)


document.write("<h1>Nested If Else</h1>")

let name = prompt("Enter Your Name");
let cat = prompt("Select any one category (Sweet , FastFood and Drinks)");

let items , sub_item , qty;


if(cat == "Sweet"){
    items = prompt("Now Select item (Cake & brownie)");
    if(items == "Cake"){
         sub_item = prompt("Select Variation (Strawberry cake Rs 1000 & Chocolate Cake Rs 1200)");
         qty = prompt("Enter your qty");
        if(sub_item == "Strawberry"){
            document.write("<p>Customer name: "+name+"</p>")
            document.write("<p>Category: "+cat+"</p>")
            document.write("<p>Item: "+items+"</p>")
            document.write("<p>Sub Item: "+sub_item+"</p>")
            document.write("<p>Quantity: "+qty+"</p>")
            document.write("<p>Total Amounty: "+1000 * qty+"</p>")

        }
        else if( sub_item == "Chocolate"){
            document.write("<p>Customer name: "+name+"</p>")
            document.write("<p>Category: "+cat+"</p>")
            document.write("<p>Item: "+items+"</p>")
            document.write("<p>Sub Item: "+sub_item+"</p>")
            document.write("<p>Quantity: "+qty+"</p>")
            document.write("<p>Total Amounty: "+1200 * qty+"</p>")
        }
        else{
            alert("Invalid cake variation")
        }
    }
    else if(items == "brownie"){
       
    }
    else{
        alert("Invalid Item");
    }
}
else if(cat == "FastFood"){
   items = prompt("Now Select item (Zinger & Pizza)");
    
}
else if(cat == "Drinks"){
   items = prompt("Now Select item (Juice & ColaNext)");
}
else{
    alert("Invalid Category")
}


console.log("hello nisa")