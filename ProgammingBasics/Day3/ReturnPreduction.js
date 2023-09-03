function hello() {
    console.log('hello');
}
hello();
console.log('Dojo');

function hello() {
    console.log('hello');
    return 15;
}
var result = hello();
console.log('result is', result);

function numPlus(num) {
    console.log('num is', num);
    return num+15;
}
var result = numPlus(3);
console.log('result is', result);

var num = 15;
console.log(num);
function logAndReturn(num){
   console.log(num);
   return num;
}
var result = logAndReturn(10);
console.log(result);
console.log(num);

var num = 15;
console.log(num);
function timesTwo(num){
   console.log(num);
   return num*2;
}
var result = timesTwo(10);
console.log(result);
console.log(num);
