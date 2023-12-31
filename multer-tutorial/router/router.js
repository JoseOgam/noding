const express = require("express");
const { addUserController } = require("../controller/controller");

const router = express.Router();

router.post("/addUser", addUserController);

module.exports = router;
