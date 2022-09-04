// Домашнее задание:
// 1)
// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

// 	То есть дефисы удаляются, а все слова после них получают заглавную букву.

// 	Примеры:
// 	camelize("background-color") == 'backgroundColor';
// 	camelize("list-style-image") == 'listStyleImage';
// 	camelize("-webkit-transition") == 'WebkitTransition';
// 	P.S. Подсказка: используйте split, чтобы разбить строку на массив символов,
// 	потом переделайте всё как нужно и методом join соедините обратно.
//   camelize("my-short-string") == "myShortString";
//
function camelize(str) {
  // str background-color

  let strArr = str.split("-");
  for (let i = 0; i < strArr.length; i++) {
    let element = strArr[i];
strArr[i]
    if (i !== 0) {
              element = element[0].toUpperCase() + element.slice(1);
              console.log(element);
    }
  }
}

// let camelisResult = camelize("background-color");
// console.log(camelisResult);

//  split/join – преобразует строку в массив и обратно.
// 2)

// 	Задача: написать функцию, принимающую массив чисел
// 	и возвращающую сумму всех его положительных элементов и отрицательных
// 	чисел отдельно в виде нового массива

// 	например функция принимает как аргумент следующий массив
// 	arr = [1, -2, 3, 4, -9]

// 	и должна вернуть [8, -11]
// 	Сохраняйте вызов этой функции через деструктурирующее присваивание
// 	Деструктурирующее присвоение означает, что возвращаемый результат функции (return) возвращает
// 	массив из двух элементов и соответственно его нужно сохранить в переменную и вывести в консоль
