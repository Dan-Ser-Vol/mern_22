import Post from "../models/Post";
import User from "../models/User";

export const createPost = async (req, res) => {
   
    try {
         const { title, text } = req.body;
         const user = await User.findById(req.userId)
    } catch (error) {
        
    }
}
