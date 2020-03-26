// Math.random(); This won't print

// this does
// process.stdout.write(Math.random().toString());
//This also works
// console.log(Math.random());

//Not handy output
// console.log(process);

//Handy outputs (higher level objects)
//- This one is exactlty the same but...
// console.dir(process);
//- Can specify level by using an object
// console.dir(process, { depth: 0 });

// function X(){
//     console.log(arguments);
// }

// X(1,7,9);

//WRAPPING, IIFE


// (function(exports, require, module, __filename, _-dirname))
console.log('In index.js')
exports.answer = 42;
module.exports.answer2 = 37;
//return module.exports
// })()

//These will be differet in different files

// -------------------------------------------------------------
