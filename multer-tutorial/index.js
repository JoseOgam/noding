const express = require("express");
const cors = require("cors");
const bodyPaser = require("body-parser");
const router = require("./router/router");

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyPaser.urlencoded({ extended: false }));
app.use(bodyPaser.json());
app.use(router);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server running at port ${port}...`);
});
