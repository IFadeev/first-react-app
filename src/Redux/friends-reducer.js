const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

let initialState = {
  frinedsPage : [
    { id: 1, 
      name: 'Dmitriy',
      surname: 'Menshikov',
      get fullName(){
        return `${this.name} ${this.surname}`
      }
    },
    { id: 2, 
      name: 'Alex',
      surname: 'Subbutin',
      get fullName(){
        return `${this.name} ${this.surname}`
      }
    },
    { id: 3, 
      name: 'Vladimir',
      surname: 'Kustov',
      get fullName(){
        return `${this.name} ${this.surname}`
      }
    },
    { id: 4, 
      name: 'Andrey',
      surname: 'Egorov',
      get fullName(){
        return `${this.name} ${this.surname}`
      }
    }
  ]
};

const frinedsReducer = (state = initialState, action) => {
  return state
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updatePosActionCreator = (postText) => 
({type: UPDATE_NEW_POST, text: postText})

export default frinedsReducer;
