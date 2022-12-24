import React, {useState, useEffect} from 'react'
import axios from "../utils/axios.js"
import {PostItem} from "../components/PostItem";

const PostsPage = () => {
    const [posts, setPosts] = useState([])

    const getMyPosts = async () => {
        try {
            const {data} =await axios.get("/posts/user/me")
            setPosts(data)
            console.log(data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getMyPosts()
    }, []);

    return (
        <div className={"flex flex-col w-1/2 py-10 gap-10 mx-auto "}>
            {posts?.map((post, index) => (<PostItem post={post} key={index}/>))}
        </div>
    )
}

export default PostsPage