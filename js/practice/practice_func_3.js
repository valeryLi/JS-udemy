"use strict";
// Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. (Смотри пример). Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"

// Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов). Так как проверки на большие числа будут раздувать код (33 часа, 31 час, 11 часов и тд). Этого будет достаточно и код будет проверять именно этот промежуток (1 - 10 часов). Но вы можете реализовать и полный скрипт, он тоже должен проходить тесты.

// Пример:

// getTimeFromMinutes(150) => "Это 2 часа и 30 минут"

// getTimeFromMinutes(50) => "Это 0 часов и 50 минут"

// getTimeFromMinutes(0) => "Это 0 часов и 0 минут"

// getTimeFromMinutes(-150) => "Ошибка, проверьте данные"

function getTimeFromMinutes(time) {
  if (typeof time !== "number" || time < 0 || !Number.isInteger(time)) {
    return "Ошибка, проверьте данные";
  }

  const hours = Math.floor(time / 60);
  const minutes = time % 60;

  let hoursStr = "";

  switch (hours) {
    case 0:
      hoursStr = "часов";
      break;
    case 1:
      hoursStr = "час";
      break;
    case 2:
    case 3:
    case 4:
      hoursStr = "часа";
      break;
    default:
      hoursStr = "часов";
  }
  return `Это ${hours} ${hoursStr} и ${minutes} минут`;
}

console.log(getTimeFromMinutes(150));

// Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.

// Пример:

// findMaxNumber(1, 5, 6.6, 11); =>  11

// findMaxNumber(1, 5, '6', '10');  =>  0

function findMaxNumber(a, b, c, d) {
  if (
    typeof a !== "number" ||
    typeof b !== "number" ||
    typeof c !== "number" ||
    typeof d !== "number"
  ) {
    return 0;
  } else {
    return Math.max(a, b, c, d);
  }
}
console.log(findMaxNumber(1, 5, 6.6, 11));
