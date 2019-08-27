const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

let initialState = {
  postData: [
    {
      id: 1,
      name: 'Ivan',
      surname: 'Fadeev',
      get fullName(){
        return `${this.name} ${this.surname}`
      },
      message: 'Hello, world!',
      date: '04.08.19'
    },
    {
    id: 2,
      name: 'Ivan',
      surname: 'Fadeev',
      get fullName(){
        return `${this.name} ${this.surname}`
      },
      message: 'Another one!',
      date: '04.08.19',
    },
    {
      id: 3,
      name: 'Ivan',
      surname: 'Fadeev',
      get fullName(){
        return `${this.name} ${this.surname}`
      },
      message: 'I learning REACT!!',
      date: '04.08.19',
    },
  ],
  currentPostData: 
    {
      message: ''
    }
}

const profileReducer = (state = initialState, action) => {
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

export const addPostActionCreator = () => ({type: ADD_POST})
export const updatePosActionCreator = (postText) => 
({type: UPDATE_NEW_POST, text: postText})

export default profileReducer;
