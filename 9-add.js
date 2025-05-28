function add(a, b){
    console.log(a + b);
}

let argument1 = Math.floor(process.argv[2]);
let argument2 = Math.floor(process.argv[3]);
add(argument1, argument2);
