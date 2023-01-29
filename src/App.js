import './App.css';
import React from 'react';
import {Route, Routes} from "react-router";
import {
    AboutPage,
    AlbumsPage,
    CommentsPage,
    HomePage,
    NotFoundPage,
    PostByCommentPage,
    PostDetailsPage,
    PostsPage,
    TodosPage,
    UsersPage
} from "./pages";
import {MainLayout} from "./layouts";


const App = () => {
  return (
      <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'users'} element={<UsersPage/>}/>
                    <Route path={'posts'} element={<PostsPage/>}>
                         <Route path={':postId'} element={<PostDetailsPage/>}/>
                    </Route>
                    <Route path={'todos'} element={<TodosPage/>}/>
                    <Route path={'comments'} element={<CommentsPage/>}>
                        <Route path={':postId'} element={<PostByCommentPage/>}/>
                    </Route>
                    <Route path={'albums'} element={<AlbumsPage/>}/>
                    <Route path={'about'} element={<AboutPage/>}/>
                </Route>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Routes>

      </div>
  );
};

export {App};
