let phone = new Map([

    ["ios", "apple"],
  
    ["android", "samsung"],
  ]);
  
  for (let OS of phone.keys()) {
  
    console.log(`${OS} - X`); // apple, strawberry, blueberry
  
  };
  
  for (let smartphone of phone.values()) {
  
    console.log(`${smartphone} - Y`); // green, red, blue
  
  };