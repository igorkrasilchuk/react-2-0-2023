import {Comments} from "../../components";
import {Outlet} from "react-router";
import css from './PostByCommentPage.module.css'
const CommentsPage = () => {
    return (
        <div className={css.postsByComment}>
            <Comments/>
            <Outlet/>
        </div>
    );
};

export {CommentsPage};