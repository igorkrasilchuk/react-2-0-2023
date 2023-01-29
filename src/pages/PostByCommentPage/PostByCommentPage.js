import {useParams} from "react-router";
import {PostByComment} from "../../components";

const PostByCommentPage = () => {
    const {postId} = useParams();

    return (
        <div>
            <PostByComment postId={postId}/>
        </div>
    );
};

export {PostByCommentPage};