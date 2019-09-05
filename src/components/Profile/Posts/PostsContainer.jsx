// import React from 'react';
import {addPostActionCreator, updatePosActionCreator} from '../../../Redux/profile-reducer';
import Posts from './Posts';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    onAddPost: () => {
      dispatch(addPostActionCreator());
    },
    onPostChange:  (postText) => {
      dispatch(updatePosActionCreator(postText));;
    }
  }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts); 


export default PostsContainer;
