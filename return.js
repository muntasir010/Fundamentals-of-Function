function tenTimes(number){
    const result = number * 10;
    return result;
}
tenTimes(34);

function cutHalf(number){
    const half = number / 2;
    return half;
}
cutHalf(5);

const output = tenTimes(5);
console.log('Output', output);

const bigNumber = tenTimes(99);
console.log('TenTimes', bigNumber);