console.log("=====================step 1===========================");

function squareOfWordLength(s1){
    var totalChar= s1.length;
    console.log(`length of given string is= ${totalChar}`);
    var square= s1.length * s1.length;
    console.log(`Square of string length is= ${square}\n`);
}
squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart");

console.log("==================step 2==============");

function string(){
    var givenString="I am Angular Developer";
    console.log(`Length of given string is = ${givenString.length}`);
    var result = givenString.split(" ");
    console.log(`Total word in the string is ${result.length}\n`);
    var div= givenString.length / result.length;
    console.log(`2.1) string length divided by total number of words available in string is = ${div}`);
    var result= givenString.length * result.length;
    console.log(`2.2) string length and multiple by total number of word available in the string is = ${result}`);
}
string()