const argument = Math.floor(process.argv[2]);
if (argument){
    console.log(`My number: ${argument}`);
} else {
    console.log("Not a number");
}
