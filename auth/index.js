const express = require("express");
const cors = require("cors");
const bodyParse = require("body-parser");
const router = require("./router/router");

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParse.urlencoded({ extended: false }));
app.use(bodyParse.json());
app.use(router);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server is running at port ${port}...`);
});

// KMWB84CM0J4Emxjn;
