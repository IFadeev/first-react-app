import React from 'react';
import posts from './Posts.module.css';
import Post from './Post/Post';

const Posts = (props) => {


let postElemets = props.postData.map( post => <Post name = {post.fullName} date = {post.date} message ={post.message}/>);

  return(
    <div className={posts.wall}>
      <div className={posts.upload}>
        <div className={posts.wall__field }>
          <textarea className={posts.field} placeholder="What's up?" columns="5" rows="2"></textarea>
        </div>
        <button>Post</button>
      </div>

      {postElemets}

    </div>
  );
}

export default Posts;
