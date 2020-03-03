const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const logger = require("morgan"); //middleware
const API = require("../api");

//tranking request optional
// we create file and save all request history into access.log
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "access.log"),
  { flags: "a" }
);

module.exports = async app => {
  app.use(express.json());
  app.use(cors("*"));
  app.use(logger("dev"));
  /* add routes  */
  app.use("/api/user", API.userRouter);
};
