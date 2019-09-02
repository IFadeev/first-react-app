import React from 'react';
import {addPostActionCreator, updatePosActionCreator} from '../../../Redux/profile-reducer';
import Posts from './Posts';


const PostsContainer = (props) => {

  let state = props.store.getState().profilePage;

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
        
           postData        = {state.postData}
           currentPostData = {state.currentPostData}
           
           />
  );
}


export default PostsContainer;
