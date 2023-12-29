function square (num){
    console.log("Given value is: ",num);
    var result = num * num;
    console.log("Result is:",result);
}
square(9);//function call orninvocation
square(11);
square(25);

console.log("============STEP 2===========");
function multiply (n1,n2,n3){
    console.log("Given numbers are:",n1,n2,n3);
    var result = n1*n2*n3;
    return result;
}
 var returnValue = multiply(5,5,5);
 console.log("multiplication is:",returnValue);

 console.log("=========STEP 3=================");
       function swap(n1,n2){
        console.log("Befor swap","n1->n1","n2->",);
        var temp = n1;
        n1 = n2;
        n2=temp;
        console.log("After swap","n1->",n1,"n2->",n2);
       }
       swap(100,200);
       swap("jenny","menny");