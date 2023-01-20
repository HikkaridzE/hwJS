let n = +prompt('Введите число: ');
console.log (typeof n);

if(n <= 0)
  {
    console.log(false)
  }
else if (n% 2 ===0){
  console.log ("четное");
}
else if (n%1 ===0) {
  console.log("нечетное");
  
}
else {
  console.log("Упс, кажется вы ошиблись")
}