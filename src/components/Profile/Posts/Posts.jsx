import React from 'react';
import posts from './Posts.module.css';
import Post from './Post/Post';

const Posts = (props) => {

let postElemets = props.postData.map( post => <Post name = {post.fullName} date = {post.date} message ={post.message}/>);


let newPostText = React.createRef();

let addPost = () => {
  props.addPost();
  newPostText.current.value = '';
  props.updatePostTextarea('');
}

let updatePostTextarea = () => {
  let text = newPostText.current.value;
  props.updatePostTextarea(text);
}

debugger;
  return(
    <div className={posts.wall}>
      <div className={posts.upload}>
        <div className={posts.wall__field }>
          <textarea onChange = {updatePostTextarea} value = {props.currentPostData.message} ref={newPostText} className={posts.field} placeholder="What's up?" columns="5" rows="2"></textarea>
        </div>
        <button onClick = { (addPost) }>Post</button>
      </div>

      {postElemets}

    </div>
  );
}

export default Posts;
