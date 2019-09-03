import React from 'react';
import {addPostActionCreator, updatePosActionCreator} from '../../../Redux/profile-reducer';
import Posts from './Posts';


const PostsContainer = (props) => {

  let state = props.store.getState().profilePage;

  let onAddPost = () => {
    props.store.dispatch(addPostActionCreator());
  }

  let onPostChange = (postText) => {
    let action = updatePosActionCreator(postText);
    props.store.dispatch(action);

  }

  return(
    <Posts onPostChange = {onPostChange}
              onAddPost = {onAddPost} 
              postData  = {state.postData}
        currentPostData = {state.currentPostData}
           
           />
  );
}


export default PostsContainer;