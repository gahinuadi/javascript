console.log("================Assignment 02==============");

function stringHandsOn(){
    var givenString=`"   Hey you are doing good, keep it up   "`;
    console.log(`1)Given string is = ${givenString}`);
}
stringHandsOn();

var givenString=`"  Hey you are doing good, keep it up  "`;
var totalChar =givenString.length;
console.log(`2) Length of the string is = ${totalChar}`);

var givenString=`"  Hey you are doing good, keep it up  "`;
var trimResult =givenString.length;
console.log(`3) After trim string is : ${trimResult}, It's length is: ${trimResult.length}`);

var extraSpaces = totalChar-trimResult.length;
console.log(`4)The total number of extra spaces Removed is= ${extraSpaces}`);

var firstChar = trimResult.charAt(0);
var lastChar = trimResult.charAt(33);
console.log(`5) First character after strim is= ${firstChar}, Last character after strim is= ${lastChar}`);

var result = trimResult.split(" ");
console.log(`6) Total words in the string is =${result.length}`);

var indexOfGood = trimResult.indexOf('good');
console.log(`7)index of word "Good" is= ${indexOfGood}`);

var result = trimResult.substring(22);
var result = trimResult.slice(22);
console.log(`8)Substring starting from index 22 is= ${result}, slice starting from index is =${result}`);

var result = trimResult.endsWith("up");
console.log(`9 string ends with word "up"=${result}`);

var result = trimResult.startsWith("Hey");
console.log(`10) string start weith word "Hey" = ${result}`);