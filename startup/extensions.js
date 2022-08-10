const compression = require("compression");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const express = require("express");
const logger = require("morgan");
const helmet = require("helmet");
const { authenticate } = require("../middlewares/authentication");
const error = require("../middlewares/errorHandler");

module.exports = function (app) {
  app.use(cors());
  app.use(logger("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(helmet());
  app.use(compression());
  // app.use(authenticate());
  app.use(error);
};
