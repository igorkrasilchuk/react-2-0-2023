
import {postService} from "../../services";
import {useEffect, useState} from "react";

const PostByComment = ({postId}) => {
    const  [post, setPost] = useState([])

    useEffect(()=>{
                   postService.getById(postId).then(({data}) => setPost(data))
    },[postId])

    return (
        <div>
            { postId &&
                <>
                    <h3>Number: {post.id} </h3>
                    <h2>Title: {post.title}</h2>
                    <h3>Text: {post.body}</h3>
                </>
            }
        </div>
    );
};

export {PostByComment};