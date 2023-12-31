const User = require("../model/user");

const addUserController = async (req, res) => {
  const addUser = await new User(req.body);
  console.log(req.body);

  try {
    await addUser.save();
    res.status(201).send(req.body);
  } catch (e) {
    res.status(400).send(e.message);
  }
};

module.exports = { addUserController };
