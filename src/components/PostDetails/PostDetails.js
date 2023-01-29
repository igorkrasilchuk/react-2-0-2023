import {useEffect, useState} from "react";
import {postService} from "../../services";

const PostDetails = ({postId, state}) => {
    const  [post, setPost] = useState(null)

    useEffect(()=>{
            if (state) {
                setPost({...state});
            }
            else {
                postService.getById(postId).then(({data}) => setPost(data))
            }
    },[postId])

    return (
        <div>
            { post &&
                <>
                    <h3>Number: {post.id} </h3>
                    <h2>Title: {post.title}</h2>
                    <h3>Text: {post.body}</h3>
                </>
            }
        </div>
    );
};

export {PostDetails};