const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST: 
      let newPost = { 
        id: 5,
        name: 'Ivan',
        surname: 'Fadeev',
        get fullName(){
          return `${this.name} ${this.surname}`
      },
        message: state.currentPostData.message,
        date: '08.11.19'
    };
      state.postData.unshift(newPost);
      state.currentPostData.message = '';
      return state
    case UPDATE_NEW_POST: 
      state.currentPostData.message = action.text;
      return state
    default: 
      return state
  }
}

export default profileReducer;
