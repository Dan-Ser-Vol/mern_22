import Post from "../models/Post.js";
import User from "../models/user.js";
import path, {dirname} from "path";
import {fileURLToPath} from "url";

export const createPost = async (req, res) => {
    try {
        const {title, text} = req.body;
        const user = await User.findById(req.userId);
        if (req.files) {
            let fileName = Date.now().toString() + req.files.image.name;
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
                $push: {post: newPostWithImage},
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
            $push: {post: newPostWithoutImage},
        });
        return res.json(newPostWithoutImage);
    } catch (error) {
        console.log(error);
        res.json({
            message: "Упс... Щось пішло не так!",
        });
    }
};

export const getAll = async (req, res) => {
    try {
        const posts = await Post.find().sort("-createdAt");
        const popularPosts = await Post.find().limit(5).sort("-views");
        if (!posts) {
            return res.json({message: "Постів поки що нема"});
        }
        res.json({posts, popularPosts});
    } catch (error) {
        res.json({message: "Щось не так!"});
    }
};


export const getById = async (req, res) => {
    try {
        const {id} = req.params
        const post = await Post.findByIdAndUpdate(id,
            {$inc: {views: 1}}
        )
        if (!post) {
            return res.json({message: "Пост не знайдений"});
        }
        res.json(post);
    } catch (error) {
        res.json({message: "Щось не так!"});
    }
};
