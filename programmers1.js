/**
 * 정수 a와 b가 주어집니다. 각 수를 입력받아 입출력 예와 같은 형식으로 출력하는 코드를 작성해 보세요.
 * 
 * 제한사항
 * -100,000 ≤ a, b ≤ 100,000
 * 
 * 입력 #1 4 5
 * 출력 #2 a = 4, b = 5
 */

//readline 변수로 readline 모듈을 불러옴
const readline = require('readline');
//rl 변수로 input과 output interface를 생성
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

// rl.on이 연속으로 붙어 있는데 각 라인마다 실행 후 종료, 실행 후 종료를 반복
rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    console.log(`a = ${Number(input[0])}\nb = ${Number(input[1])}`);
});