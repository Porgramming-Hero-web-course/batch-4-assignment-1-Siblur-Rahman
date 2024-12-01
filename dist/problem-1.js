"use strict";
const sumArray = (array) => {
    return array.reduce((total, num) => total + num, 0);
};
const numbers = [1, 2, 3];
console.log(sumArray(numbers));
