const User = require("../model/user");
const multer = require("multer");

//set up multer storage for storing uploaded images
const storage = multer.diskStorage({
  // Specify the destination folder for uploaded images
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    // Generate a unique filename for the uploaded image
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname +
        "-" +
        uniqueSuffix +
        "." +
        file.originalname.split(".").pop()
    );
  },
});

const upload = multer({ storage: storage }); //multer instance with storage config

const addUserController = async (req, res) => {
  try {
    const { name } = req.body;
    const imageUrl = req.file.filename;

    const newUser = new User({
      name: name,
      image: imageUrl,
    });

    await newUser.save();
    res.json({ message: "user detail and image saved succefully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { addUserController, upload };
