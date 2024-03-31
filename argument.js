function doubleIt (number){
    const double = number * 2;
    console.log(number, double);
}
console.log('I will call the function');
doubleIt(23);
console.log('----------------');
doubleIt(34);
console.log('----------------');
doubleIt(45);

const number = 55;
doubleIt(number);
const money = 105;
doubleIt(money);


function difference(num1, num2){
    const diff = num1 - num2;
    console.log(num1, num2, 'difference is', diff);
}
const fatherAge = 60;
const myAge = 23;
difference(fatherAge, myAge);