

let input = prompt('enter value');

if(input === 'true' || input === "false"){
  alert("type is bolean");
}else if ( input == Number (input)){
  let num = Number(input);
  if(num % 2 === 0){
    alert('type is :even ');
  }else {
    alert("type iso dd");
  }
}
else{
  alert("type is string")
}
