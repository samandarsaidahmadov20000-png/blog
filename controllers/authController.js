const { User } = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const authRegister = async (req, res) => {
  try {
    const { email, password } = req.body;

    let hashPassword = await bcrypt.hashSync(password, 10);

    const user = await User.create({
      email,
      password: hashPassword,
    });

    res.status(200).send(user);
  } catch (err) {
    res.status(400).send(err);
  }
};

const authLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, process.env.KEY, {
      expiresIn: "3h",
    });

    res.status(200).send(token);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { authRegister, authLogin };
