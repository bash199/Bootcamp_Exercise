import {fun3} from "./func.mjs";
import {writeFileSync} from "fs";

//? What is the difference between import and require?
// One of the major differences between require() and import() is that require() can be called from anywhere inside the program whereas import() cannot be called conditionally, it always runs at the beginning of the file.

//? How can you enable using the import syntax using node js.
// 1. we can name the file .mjs instead of .js
// 2.  or we can add "type" : "module" in the package.json

//? Give 2 node.js environment variables that are not available  when using the import syntax.
// 1. __dirname
// 2. __filename

//? Create 3 functions using the export/import syntax
export const fun1 = () => {
   let a = 3;
   let b = 2;
   return a ** b;
};

export const fun2 = () => {
   let a = 4;
   let b = 2;
   return a ** b;
};

console.log("fun1:", fun1());
console.log("fun2:", fun2());
console.log("fun3:", fun3());

//? Import the file system module using the import syntax.
writeFileSync("app.txt", "I am new app.txt");
