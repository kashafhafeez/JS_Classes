document.write("<h1>Array</h1>")

let students = ["Unzeela" , "Maryam" , "Kashaf" , "Hina" , "Sheraz"  , "Ali hussain" , "mohib" , "Basit"];

document.write(students[0] +"<br>")
document.write(students[1] +"<br>")


document.write("Array length: " + students.length + "<br>")


for(let i = 0 ; i < students.length ; i++){
    document.write(students[i] + " ")
}

document.write("<br>")

let numbers = [1,2,3,4,5,6,7,8,9,10]

document.write("Array length: " + numbers.length + "<br>")

for(let j = 0 ; j < numbers.length ; j++ ){
    document.write(numbers[j] + "&nbsp")
}