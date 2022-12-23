import React from 'react';

const PopularPosts = ({post}) => {
    if (!post) {
        return <div className={"text-xl text-center text-white py-10"}>
            Постів немає :(
        </div>
    }
    return (
        <div className={"bg-gray-600 my-1"}>
            <div className={" flex text-xs p-2 text-gray-400 hover:text-white"}>{post.title}</div>
        </div>
    );
};

export default PopularPosts;
