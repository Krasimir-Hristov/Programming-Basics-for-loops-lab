function sumofNumbers(input) {
    let ourInput = input[0];
    let sumOfDigit = 0;

    for( i =0; i < ourInput.length; i++){
   let currentDigits = Number(ourInput[i])
   sumOfDigit += currentDigits;
    }
    console.log(`The sum of the digits is:${sumOfDigit}`);
}
sumofNumbers(["1234"]);