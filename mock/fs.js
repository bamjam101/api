const fs = require("fs");

fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File Content:", data);
});

const content = "This is some data to write to a file.";
fs.writeFile("example.txt", content, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File written successfully.");
});
