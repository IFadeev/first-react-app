import React from 'react';
import {addPostActionCreator, updatePosActionCreator} from '../../../Redux/profile-reducer';
import Posts from './Posts';


const PostsContainer = (props) => {

let onAddPost = () => {
  props.dispatch(addPostActionCreator());
}

let onPostChange = (postText) => {
  let action = updatePosActionCreator(postText);
  props.dispatch(action);

}

  return(
    <Posts onAddPost       = {onAddPost} 
           onPostChange    = {onPostChange}
           postData        = {props.postData}
           currentPostData = {props.currentPostData}
           
           />
  );
}


export default PostsContainer;
