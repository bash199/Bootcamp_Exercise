const {
   writeFileSync,
   copyFileSync,
   renameSync,
   readdirSync,
   readFileSync,
} = require("fs");
writeFileSync("newTxt.txt", "Hey Boys");
copyFileSync("newTxt.txt", "copyOfnewTxt.txt");
renameSync("newTxt.txt", "new_newTxt.txt");
const files = readdirSync("../file_system");
console.log(files);
const data = readFileSync("copyOfnewTxt.txt", {encoding: "utf8"});
console.log(data);
