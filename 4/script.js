"use strict";

// 1
        
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
let sum = 0;
for (const key in salaries) {
          sum = sum + salaries[key];
          // sum +=salaries[key];
}
console.log(sum);

// 2

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

multiplyNumeric(menu);

menu = {
  width: 400,
  height: 600,
  title: "My menu",
};

function multiplyNumeric(obj) {
  for (const key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] = obj[key] * 2;
    }
  }
}