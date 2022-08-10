const express = require("express");
const router = express.Router();
const { validateId } = require("../middlewares/idValidation");
const { validateUser } = require("../validations/userValidation");
const { validateAuth } = require("../validations/userValidation");
const { validateUserUpdate } = require("../validations/userValidation");
const {
  getUsers,
  createUser,
  readUser,
  updateUser,
  deleteUser, 
  loginUser,
} = require("../controllers/userController");

router.get("/", getUsers);
router.get("/:id", [validateId], readUser);
router.post("/login", [validateAuth], loginUser);
router.post("/register", [validateUser], createUser);
router.put("/:id", [validateId, validateUserUpdate], updateUser);
router.delete("/:id", [validateId], deleteUser);

module.exports = router;
