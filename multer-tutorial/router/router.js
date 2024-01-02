const express = require("express");
const { addUserController, upload } = require("../controller/controller");

const router = express.Router();

router.post("/addUser", upload.single("image"), addUserController);

module.exports = router;
