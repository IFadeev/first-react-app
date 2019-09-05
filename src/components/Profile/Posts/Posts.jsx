import React from 'react';
import posts from './Posts.module.css';
import Post from './Post/Post';

const Posts = (props) => {

let postElemets = props.profilePage.postData.map( post => <Post name = {post.fullName} date = {post.date} message ={post.message}/>);

let addPost = () => {
  props.onAddPost();
}

let updatePostTextarea = (event) => {
  props.onPostChange(event.target.value);
}

  return(
    <div className={posts.wall}>
      <div className={posts.upload}>
        <div className={posts.wall__field }>
          <textarea onChange = {updatePostTextarea} 
          value = {props.profilePage.currentPostData.message} 
         className={posts.field} placeholder="What's up?" columns="5" rows="2"></textarea>
        </div>
        <button onClick = { addPost }>Post</button>
      </div>

      {postElemets}

    </div>
  );
}

export default Posts;
