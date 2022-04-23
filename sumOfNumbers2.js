function sumOfNumbers2(input){

    let n = (input[0])
    let sum = 0;

    for(let i = 0; i < n.length;i++){
        let currentDigits = Number(n[i]);
        sum += currentDigits;
        
        
    }
    console.log(`The sum of the digits is:${sum}`);

}
sumOfNumbers2(["1234"])