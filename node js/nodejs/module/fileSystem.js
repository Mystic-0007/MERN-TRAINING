import fs from "fs";

//symchronous blocking file

//read

const result =fs.readFileSync("data/data.txt", "utf8"); //synchronous 
console.log(result)

//async


