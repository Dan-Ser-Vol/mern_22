

import Comment from '../models/Comment.js'
import Post from '../models/Post.js'

export const createComment = async (req, res) => {
   try {
      const { postId, comment } = req.body

      if (!comment)
         return res.json({ message: 'Комментарій не може' })

      const newComment = new Comment({ comment })
      await newComment.save()

      try {
         await Post.findByIdAndUpdate(postId, {
            $push: { comments: newComment._id },
         })
      } catch (error) {
         console.log(error)
      }

      res.json(newComment)
   } catch (error) {
      res.json({ message: 'Что-то пошло не так.' })
   }
}

export const getComment = async (req, res) => {
   try {
   } catch (err) {
      console.log(err)
   }
}


export const getAllComments = async (req, res) => {
   try {
   } catch (err) {
      console.log(err)
   }
}


export const updateComment = async (req, res) => {
   try {
   } catch (err) {
      console.log(err)
   }

}

export const removeComment = async (req, res) => {
   try {
   } catch (err) {
      console.log(err)
   }

}

