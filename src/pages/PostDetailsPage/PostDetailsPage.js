import {useLocation, useParams} from "react-router";
import {PostDetails} from "../../components";

const PostDetailsPage = () => {
    const {postId} = useParams();
    const {state} = useLocation();

    return (
        <div>
            <PostDetails postId={postId} state={state}/>
        </div>
    );
};

export {PostDetailsPage};