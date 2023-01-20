function reverseString(str){
    var splitString = str.split(""); 
    
    var reverseArray = splitString.reverse();
    
    var stringJoin = reverseArray.join("");
    
    return stringJoin;
  }
  
  console.log(reverseString("Hello world!"));  
  