const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const db = process.env.MONGO_URI;

mongoose
  .connect(db)
  .then(() => console.log(`db connected succefully`))
  .catch((e) => console.log(e.message));
