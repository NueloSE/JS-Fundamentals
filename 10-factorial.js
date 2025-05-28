function factorial(num) {
    if (num === 1 || num === 0){
        return 1;
    }
    return num + factorial(num - 1);
}

const factorialNumber = Number(process.argv[2]);
console.log(factorial(factorialNumber));
