function numbersDivisibleBy92(input){

let startNum = Number(input[0]);
let endNum = Number(input[1]);
let sum = 0;
let output = ``

for (let i = startNum; i < endNum; i++) {
    if (i % 9 === 0) {
        sum += i;
        output += ` ${i} \n`
    }
}
console.log(`The sum: ${sum}`);
console.log(output);
}
numbersDivisibleBy92(["100", "200"])