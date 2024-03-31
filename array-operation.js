/**
 * Objective: Write a function to give me the some of all numbers in an array
 * step-1: Declare a function
 * step-2: Call check whether the function is called properly
 * step-3: Set a parameter(s)
 * step-4: Pas the parameter(s), Check whether parameter is passed in a      proper format
 * */ 

function someOfNumbers(numbers){
    let sum = 0;
    for(const number of numbers){
        console.log(number);
        sum = sum + number;
    }
    return sum;
}
const numbs = [54, 62, 12, 6]
const sum = someOfNumbers(numbs);
console.log('Some of numbers', sum);