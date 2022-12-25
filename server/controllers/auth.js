import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
   try {
      const {username, password} = req.body

      const isUsed = await User.findOne({username})

      if (isUsed) {
         return res.json({
            message: 'Цей username вже занятий.',
         })
      }

      const salt = bcrypt.genSaltSync(10)
      const hash = bcrypt.hashSync(password, salt)

      const newUser = new User({
         username,
         password: hash,
      })

      const token = jwt.sign(
          {
             id: newUser._id,
          },
          process.env.JWT_SECRET,
          {expiresIn: '30d'},
      )

      await newUser.save()

      res.json({
         newUser,
         token,
         message: 'Регістрація пройшла успішно.',
      })
   } catch (error) {
      res.json({message: 'Помилка при створенні користувача.'})
   }
}

export const login = async (req, res) => {
   try {
      const {username, password} = req.body;
      const user = await User.findOne({username});
      if (!username) {
         res.json({message: "Такого користувача немає!"});
      }

      const isCorrectPassword = await bcrypt.compare(password, user.password);
      if (!isCorrectPassword) {
         res.json({message: "Невірний пароль!"});
      }

      const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {
         expiresIn: "31d",
      });
      res.json({user, token, message: "Користувач знайденний"});
   } catch (error) {
      console.log(error);
      res.json({message: "Такого користувача немає!"});
   }
};

export const getMe = async (req, res) => {
   try {
      const user = await User.findById(req.userId);
      if (!user) {
         return res.json({message: "Такого користувача немає!!!"});
      }
      const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {
         expiresIn: "31d",
      });
      res.json({user, token, message: "Користувач знайденний"});
   } catch (error) {
      console.log(error);
      res.json({message: "Такого користувача немає!"});
   }
};
