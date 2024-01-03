console.log("=============step 1================");

function greaterNumber(n1,n2){
    var result = n1>n2 ? n1 : n2;
    console.log(`The greater number is = ${result}`);
}
greaterNumber(10,-10);
greaterNumber(800,899);

console.log("==============step 2================");

function isEvenOrOddNum(num){
    var result = num % 2;
    var resultValue = result == 0 ? console.log(`${num} is even number`) : console.log(`${num} is odd number`);
}
isEvenOrOddNum(29);
isEvenOrOddNum(44);
isEvenOrOddNum(0);
isEvenOrOddNum(101);

console.log("=============step 3================");

function wordLength(num){
    var totalChar= num.length;
    console.log(`=> Length of ${num} is= ${totalChar}`);
    var result = num % 2;
    var resultValue = result == 0 ? "length is even number \n" : "length is odd number \n";
    console.log(resultValue);
}
wordLength("javaScript");
wordLength("developer");
wordLength("google");