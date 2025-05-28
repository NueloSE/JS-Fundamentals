let result = "Missing number of occurrences";
let argument = Math.floor(process.argv[2]);

if (argument || argument == 0){
    result = "C is fun";
    let i = argument;

    while (i > 0) {
        console.log(result);
        i -= 1;
    }
} else console.log(result);
