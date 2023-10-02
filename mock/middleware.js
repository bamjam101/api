const express = require("express");
const app = express();
const port = 3000;

/* ------------------------------------------------ */
app.use(bodyParser.json());

app.post("/api/data", (req, res) => {
  // Access JSON data from the request body
  const data = req.body;
  // Process data...
  res.json({ message: "Data received" });
});

/* ------------------------------------------------ */

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
