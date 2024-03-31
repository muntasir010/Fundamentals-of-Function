function vathKhao(){
    console.log('Hand wash kro');
    console.log('Chair e boso');
    console.log('Plate e oke khabar dao');
    console.log('vodro vabe khao');
}
// vathKhao();

// 3 ---> 3 * 3 = 9;
// 4 ---> 4 * 4 = 16;
// 5 ---> 5 * 5 = 25;
// 11 --> 11 * 11 = 121;

function square(number){
    console.log('Value of the number', number);
    const borgo = number * number;
    console.log('Square is the given number of:', borgo);
}
square(4);
console.log('-----------------');
square(5);
square(11);
square(344);

function sum(num1, num2 , num3){
     const sum = num1 + num2;
     console.log(sum);
     console.log(num3);
}
sum(45, 43);

function addAll(a, b, c, d, e){
    const total = a + b + c + d + e ;
    console.log(a, b, c, d, e );
    console.log(total);
}
addAll(2, 3, 4, 5 );
addAll(4, 3, 5, 4, 7);