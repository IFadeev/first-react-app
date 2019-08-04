import React from 'react';
import posts from './Posts.module.css';
import Post from './Post/Post';

const Posts = () => {
  return(
    <div className={posts.wall}>
      <div className={posts.upload}>
        <div className={posts.wall__field }>
          <textarea className={posts.field} placeholder="What's up?" columns="5" rows="2"></textarea>
        </div>
        <button>Post</button>
      </div>

      <Post name='Ivan Fadeev' date='04.08.19' message='You looks nice!'/>
      <Post name='Ivan Fadeev' date='03.08.19' message='Hello, world!'/>
      
    </div>
  );
}

export default Posts;
