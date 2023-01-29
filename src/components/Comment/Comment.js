import {useLocation, useNavigate} from "react-router";

const Comment = ({comment}) => {
    const {id, postId, name, email, body} = comment;
    const navigate = useNavigate();
    return (
        <div>
            <div>postId: {postId}</div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <div>body: {body}</div>
            <button onClick={()=> navigate(postId.toString())}>Post of Comment</button>
            <hr/>
        </div>
    );
};

export {Comment};