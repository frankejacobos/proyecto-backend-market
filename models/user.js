const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});
userSchema.virtual("id").get(function () {
  return this._id.toHexString();
});
userSchema.set("toJSON", { virtuals: true });
userSchema.methods.generateAuthToken = function () {
  return jwt.sign(
    { userId: this._id, isAdmin: this.isAdmin },
    process.env.JWT_KEY
  );
};

const User = mongoose.model("User", userSchema);
module.exports = { User };
