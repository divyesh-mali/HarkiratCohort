const path = require("path");

console.log("Current directory:", __dirname); // Prints the current directory
console.log("Current file:", __filename); // Prints the current file path
console.log("Path to this file:", path.resolve(__filename)); // Prints the absolute path to this file
console.log("\n\n")
console.log(__dirname + "../../index.js" + "/projects" + "/index.js"); // Joins path incorrectly because there can be an issue with adding/removing the slash character '/' in the path as it is doing simple string concatenation and no path handling
console.log(path.join(__dirname, "../../index.js", "/projects", "/index.js")); // But this function actually does path handling correctly & joins paths correctly instead of just concatenating the strings

// watch at 57:00