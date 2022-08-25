// // level 1

// //1)  Выведите чётные числа
// //При помощи цикла for выведите чётные числа от 2 до 10.
// //Для проверки на чётность используйте оператор получения остатка от деления % - if (i % 2 == 0)

// метод 1

for (let i = 2; i <= 10; i++) {
          if (i % 2 == 0) {
                     console.log(i);
           }
}
// метод 2
for (let i = 2; i <= 10; i += 2) {
          console.log(i); 
}


// // level 1.1

 //1.1) Перепишите код, заменив цикл for на while, без изменения поведения цикла.
  //for (let i = 0; i < 3; i++) {
  //alert( `number ${i}!` );
  //}

  for (let i = 0; i < 3; i++) {
  console.log ( `number ${i}!` );
  } 

let i = 0;
while (i < 3) {
          console.log(`Number ${i}!`);
          i++;
}


// // level 2
// // 2) Замените код Function Expression стрелочной функцией:
//   //function ask(question, yes, no) {
//   //  if (confirm(question)) yes()
//   // else no();
//   // }


//  //ask(
//  //"Вы согласны?",
//  //function() { alert("Вы согласились."); },
//  //function() { alert("Вы отменили выполнение."); }
//  //);


 function ask(question, yes, no) {
          if (confirm(question)) yes()
          else no();
          }
  
 ask(
   "Вы согласны?",
   () => console.log("Вы согласились."),
   () => console.log("Вы отменили выполнение."),
   );

