const { User } = require("../models/user");
const createError = require("http-errors");
const bcrypt = require("bcrypt");

module.exports.getUsers = async (_req, res, next) => {
  try {
    const users = await User.find().sort({ name: 1 }).select("-password");
    res.status(200).json({
      message: "Usuarios encontrados",
      users: users,
    });
  } catch (err) {
    return next(err);
  }
};

module.exports.loginUser = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return next(createError(404, "Usuario no encontrado"));
    }
    const isPasswordValid = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordValid) {
      return next(createError(401, "Contraseña incorrecta"));
    }
    let token = user.generateAuthToken();
    res.status(200).json({
      message: "Usuario autenticado",
      user: {
        email: user.email,
        token: token,
      },
    });
  } catch (err) {
    return next(err);
  }
};

module.exports.createUser = async (req, res, next) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const user = await User.create(req.body);
    if (!user) {
      return next(createError(400, "Usuario no creado"));
    }
    res.status(201).json({
      message: "Usuario creado",
      user: user,
    });
  } catch (err) {
    return next(err);
  }
};

module.exports.readUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id).select("-password");
    if (!user) {
      return next(createError(404, "Usuario no encontrado"));
    }
    res.status(200).json({
      message: "Usuario encontrado",
      user: user,
    });
  } catch (err) {
    return next(err);
  }
};

module.exports.updateUser = async (req, res, next) => {
  try {
    if (req.body.password) {
      req.body.password = await bcrypt.hash(req.body.password, 10);
    } else {
      let userTemp = await User.findById(req.params.id);
      req.body.password = userTemp.password;
    }
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!user) {
      return next(createError(404, "Usuario no encontrado"));
    }
    res.status(200).json({
      message: "Usuario actualizado",
      user: user,
    });
  } catch (err) {
    return next(err);
  }
};

module.exports.deleteUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return next(createError(404, "Usuario no encontrado"));
    }
    res.status(200).json({
      message: "Usuario eliminado",
      user: user,
    });
  } catch (err) {
    return next(err);
  }
};
