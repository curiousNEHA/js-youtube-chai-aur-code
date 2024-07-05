// array

//declaration of array(method1)
/*const myArr=[1,2,3,4,5];
console.log(myArr);

//declaration of array(method2)
const myArr2 = new Array("pala","pooja","sourav","neha");
console.log(myArr2);
 
//Accessing elements of array using index
console.log(myArr[1]);

//methods of array

myArr.push(10);
myArr.push(12);
console.log(myArr);

myArr.pop();
myArr.pop();
console.log(myArr);

myArr.unshift(11);
console.log(myArr);
myArr.shift();
console.log(myArr);

console.log(myArr.includes(4));
console.log(myArr.includes(40));

console.log(myArr.indexOf(2));

const newArr3= myArr.join();
console.log(newArr3);

//slice and splice methods

const newArr4 = myArr.slice(1,3);
console.log(myArr);
console.log(newArr4);

const newArr5 = myArr.splice(1,3);
console.log(newArr5);
console.log(myArr);
*/

const arr1 = [1,2,3,4];
const arr2 = [5,6,7,8];
//arr1.push(arr2);
//console.log(arr1);

//console.log(arr1[4][1]);

//const myArr = arr1.concat(arr2);
//console.log(myArr);

//const myArr = [...arr1,...arr2];
//console.log(myArr);

//const myArr =[1,2,3,[4,5,[6,7,8]]];
//console.log(myArr.flat(Infinity));

console.log(Array.isArray([1,2,3,4]));
console.log(Array.from("neha"));

let score1 = 20;
let score2 = 30;
let score3 = 40;
const newArray = Array.of(score1,score2,score3);
console.log(newArray);

