console.log("===============step 1=======================");

var array = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(array);
var arrayString = array.slice(0,1);
console.log(`First element is: ${arrayString}`);

var arrayString = array.slice(4);
console.log(`Last element is: ${arrayString}`);

console.log("===============step 2========================");
var array = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(array);
array.unshift("papaya");
console.log(array);

console.log("================step 3====================");
let arrayStrng = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(array);
const removeElement = arrayStrng.splice(3,1);
console.log(arrayStrng);

console.log("======================step 4=====================");
var array = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(array);
array.push("pineapple");
console.log(array);

console.log("============step 5===================");
var array = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(array);
var arraySt = array.splice(4,0,'Dragon Fruit');
console.log(array);

console.log("===========step 6===================");
var array = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(array);
array.splice(1,1,'Kiwi');
console.log(array);

console.log("================step 7============");
var array = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(array);
array.shift(0);
console.log(array);

console.log("===============step 8===============");
var array = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(array);
var arrayString = array.slice(2);
console.log(`Last 3 element is: ${arrayString}`);