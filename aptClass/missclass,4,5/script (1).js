document.write("<h1>JS Loops</h1>")


for(let i = 1; i <=10 ; i++){
    //result
    document.write(i+" Aptech Learning <br>")
}


for(let i= 5; i >= 1; i--){
    document.write(i +"<br>")
}


// for(let i = 1 ; i<=5 ; i--){   //  infinite
//     document.write(i +"<br>")
// }


let table = 6;

document.write("<table border='1'>")
for(let j = 1 ; j <=10 ; j++){
    // document.write(table + " * "+ j  + " = "+j*table)
    document.write("<tr><td>"+table+"</td><td>*</td><td>"+j+"</td><td>=</td><td>"+j*table+"</td></tr>")
}
document.write("</table>")