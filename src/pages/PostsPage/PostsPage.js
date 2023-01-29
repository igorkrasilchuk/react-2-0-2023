import React from 'react';
import {Posts} from "../../components";
import {Outlet} from "react-router";
import css from './PostPage.module.css'

const PostsPage = () => {
    return (
        <div className={css.postsPage}>
            <Posts/>
            <Outlet/>
        </div>
    );
};

export {PostsPage};