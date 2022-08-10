const createError = require("http-errors");
const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

module.exports.validarVenta = (req, _res, next) => {
  const { error } = Joi.object({
    items: Joi.array()
      .items(
        Joi.object({
          cantidad: Joi.number().required(),
          producto: Joi.objectId().required(),
        })
      )
      .required(),
  }).validate(req.body);
  if (error) {
    return next(error);
  }
  next();
};
