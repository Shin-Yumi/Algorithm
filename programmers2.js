/**
 * 문자열 반복해서 출력하기
 * 
 * 문자열 str과 정수 n이 주어집니다. str이 n번 반복된 문자열을 만들어 출력하는 코드를 작성해 보세요.
 * 
 * 1 ≤ str의 길이 ≤ 10 , 1 ≤ n ≤ 5
 * 
 * 입력 string 5 출력 stringstringstringstringstring
 */
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    str = input[0];
    n = Number(input[1]);
    console.log(str.repeat(n));
});