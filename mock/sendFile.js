const path = require("path"); // Import the path module

app.get("/api", (req, res) => {
  // Generate the absolute file path to your HTML file
  const filePath = path.join(__dirname, "views", "index.html");

  // Send the HTML file
  res.sendFile(filePath);
});
