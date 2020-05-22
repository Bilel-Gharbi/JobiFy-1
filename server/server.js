const express = require("express");
const path = require("path");
const loader = require("./loaders");

const app = express();
loader(app);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("../client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

let port = process.env.PORT || 5000;
app.listen(port, (err) =>
  err ? console.log(err) : console.log(`server is running on port ${port}`)
);
