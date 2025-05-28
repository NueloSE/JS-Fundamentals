function printNumberTimes(num) {
    let output = "";
    for (let i = 0; i < num; i++){
        output += 'X'
    }
    console.log(output);
}

let printSize = Math.floor(process.argv[2]);

if (printSize || printSize == 0) {
    for (let i = 0; i < printSize; i++){
        printNumberTimes(printSize);
    }
} else {
    console.log('Missing size');
}
