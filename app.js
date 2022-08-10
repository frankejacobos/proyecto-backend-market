const express = require("express");
require("dotenv").config({ path: "./.env" });

const app = express();
require("./startup/database")();
require("./startup/extensions")(app);
require("./startup/routes")(app);

module.exports = app;
