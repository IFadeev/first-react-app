const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

const profileReducer = (state, action) => {

  if (action.type === ADD_POST) {
    //let nowDate = new Date();   
    let newPost = { 
      id: 5,
      name: 'Ivan',
      surname: 'Fadeev',
      get fullName(){
        return `${this.name} ${this.surname}`
    },
      message: action.text,
      date: '08.11.19'
  };
    state.postData.unshift(newPost);
    state.currentPostData.message = '';
  }

  else if (action.type === UPDATE_NEW_POST) {
      state.currentPostData.message = action.text;
  }
  return state
}

export default profileReducer;