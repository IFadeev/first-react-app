import React from 'react';
import Dialogues from './Dialogues';
import {sendMessageActionCreator, updateMessageActionCreator} from '../../Redux/dialogues-reducer';
import {connect} from 'react-redux';

let mapStatetoProps = (state) => {
  return {
    dialogPage: state.dialogPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    onSendMessage: (message) => {
      dispatch(sendMessageActionCreator(message));
    },
    onUpdateMessage:  (message) => {
      dispatch(updateMessageActionCreator(message));
    }
  }
}

const DialoguesContainer = connect(mapStatetoProps, mapDispatchToProps)(Dialogues);

export default DialoguesContainer;