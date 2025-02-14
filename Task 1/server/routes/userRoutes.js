const express = require("express");
const { registerUser, loginUser, getAllUsers, logoutUser, getCurrentUser } = require("../controllers/userController");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/", getAllUsers);
router.get("/me", getCurrentUser);
router.post("/logout", logoutUser);

module.exports = router;