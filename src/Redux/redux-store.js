import {createStore, combineReducers} from 'redux';
import profileReducer from './profile-reducer';
import dialoguesReducer from './dialogues-reducer';
import friendsReducers from './friends-reducer';


let reducers = combineReducers({
  profilePage: profileReducer,
  dialogPage: dialoguesReducer,
  frinedsPage: friendsReducers
});

let store = createStore(reducers); 

window.store = store;

export default store;