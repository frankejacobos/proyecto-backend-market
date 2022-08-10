const mongoose = require("mongoose");

module.exports.validateId = (req, _res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id))
    next(createError(404, "Invalid id."));
  next();
};
