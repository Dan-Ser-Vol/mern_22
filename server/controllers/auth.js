import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const isUser = await User.findOne({ username });
    if (isUser) {
      return res.json({ message: "Користувач вже зареєстрований" });
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const user = new User({ username, password: hash });
    await user.save();
     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
       expiresIn: "31d",
     });
   return res.json({ user, token, message: "Реєстрація пройшла успішно!" });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ message: "Помилка при реєстрації користувача" });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!username) {
      res.json({ message: "Такого користувача немає!" });
    }

    const isCorrectPassword = await bcrypt.compare(password, user.password);
    if (!isCorrectPassword) {
      res.json({ message: "Невірний пароль!" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "31d",
    });
    res.json({ user, token, message: "Користувач знайденний" });
  } catch (error) { 
    console.log(error);
    res.json({ message: "Такого користувача немає!" });}
};

export const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) {
      return res.json({ message: "Такого користувача немає!" });
    }
    const token = jwt.sign({ id: user._id}, process.env.JWT_SECRET, {
      expiresIn: "31d",
    });
    res.json({ user, token, message: "Користувач знайденний" });
  } catch (error) {
    console.log(error);
    res.json({ message: "Такого користувача немає!" });}
};
