/**
 * 다음과 같이 출력하도록 코드를 작성해 주세요.
 * 
 * !@#$%^&*(\'"<>?:;
 */
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('close', function () {
    console.log('!@#$%^&*(\\\'"<>?:;')
});