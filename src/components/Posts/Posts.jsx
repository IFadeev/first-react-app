import React from 'react';
import posts from './Posts.module.css';

const Posts = () => {
  return(
    <div>
      <div className={posts.upload}></div>
      <div className={posts}></div>
    </div>
  );
}

export default Posts;