import {useNavigate} from "react-router";

const Post = ({post}) => {
    const {id, userId, title} = post;
    const navigate = useNavigate();
    return (
        <div>
            <h4>Number: {id}   ----------   Author: user {userId}</h4>
            <h2>Title: <em>{title}</em></h2>
            <button onClick={()=> navigate(id.toString(), {state:post})}>Details</button>
            <hr/>
        </div>
    );
};

export {Post};