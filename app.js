"use strict";

//Destructuring
//Destructuring means rebuilding a structure using the same existing material.
//Destructuring can be done to two things
//1. Array destructuring
//2. Object destructuring

//Array destructuring
// const numbers = [10, 20, 30, 40, 50];
//const myNum = numbers[2];

//New method which works on both index and reverse index.

//const myNum = numbers.at(2);
//const myNum = numbers.at(-3);
//console.log(myNum);

//The array that we want to destructure have to be on the right side and the destructured variables will be on the left side. Inside a third bracket we will assign the name of each array.In this way the the name will be assigned serially in assigned order.

// const [a, b, c, d, e] = numbers;
// console.log(b);

//Now if we want to remove any variables from the array we can do it just by assigning the blanks.

// const [a, b, , d, e] = numbers;
// console.log(a, b, d, e)

// Swapping Value of a Variable

// let a = 1;
// let b = 2;

// Suppose we want to swap the value of a & b, in order to do that you just have write like this..

// [a, b] = [b, a];

// console.log(a, b);
// We must remember that array solely operates on position and serial.

// Nested array destructuring
//Nested array destructuring is to destructure an array within an array.In order to do that you have to just mirror the targeted array.

// const myArr = [1, 2, 3, [4, 5]];
// const [x, , y, [, z]] = myArr;

// console.log(x, y, z)

//Object Destructuring
//Object destructuring is quite similar to array destructuring but there are some major differences. Unlike Array oject operates on property name.
// const animal = {
//   animalName: "Cat",
//   age: "2 month",
//   foods: ["milk", "fish", "rice"],
// };

//From the previous object we can see that the property name foods contains an Array.If we want to get only any one item from the food array we have to do it like it is shown below.

// const {
//   animalName,
//   age,
//   foods: [food1, food2, food3],
// } = animal;
// console.log(animalName, age);

//Spread operator
//suppose we want to combine 2 arrays into 1 that will contain both array 1 and array 2.
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const arr3 = [...arr1, ...arr2];

// console.log(arr3);

//spread operator in object
// const obj1 ={
//   personName: "Raju",
//   age:23,
// };
// const obj2 = {...obj1}

// console.log(obj2)

//spread operator must be on the right side of the equation.

//Rest pattern---> array
// If we use three dots on the left side it will become the rest pattern.

// const evenNumbers = [2, 4, 6, 8, 10, 12];
// const [even1, even2, , ...others] = evenNumbers;

// console.log(even1, even2, others);

// Rest pattern ---> Object
// As we know that objet operates on property name unlike array it will pack everything inside an array.

// const student = {
//   studentName: "Minar",
//   age: 25,
//   subject: "Chartered Accounting",
// };

// const { age, ...rest } = student;

// console.log(rest);

//Rest parameter
// we need to remember a formula in rest parameter.
//...arg---> spread ---> unpack
//...param---> rest ---> pack

// function doSum(a,b) {
//   return a+b;
// }

// const summation = [1, 2];

// console.log(doSum(...summation)); //1, 2

//Now if we want to add more than just more than 2 number and the array contains numerous number of variables we will use the rest parameter.