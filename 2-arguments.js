let arguments = (process.argv).length
let result = "No argument";

if (arguments === 3){
    result = "Argument found";
} else if (arguments > 3){
    result = "Arguments found"
}

console.log(result);
