import Post from "../models/Post";
import User from "../models/User";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

export const createPost = async (req, res) => {
  try {
    const { title, text } = req.body;
    const user = await User.findById(req.userId);
    if (req.files) {
      let fileName = Data.now().tostring() + req.files.image.name;
      const __dirname = dirname(fileURLToPath(import.meta.url));
      req.files.image.mv(path.join(__dirname, "..", "uploads", fileName));

      const newPostWithImage = new Post({
        username: user.username,
        title,
        text,
        imgUrl: fileName,
        author: req.userId,
      });
      await newPostWithImage.save();
      await User.findByIdAndUpdate(req.userId, {
        $push: { post: newPostWithImage },
      });
      return res.json(newPostWithImage);
    }

    const newPostWithoutImage = new Post({
      username: user.username,
      title,
      text,
      imgUrl: "",
      author: req.userId,
    });
      await newPostWithoutImage.save();
      await User.findByIdAndUpdate(req.userId, {
        $push: { post: newPostWithoutImage },
      });
      return res.json(newPostWithoutImage);
  } catch (error) {res.json({message: "Упс... Щось пішло не так!"})}
};
