import React from 'react';
import maincss from './App.module.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Profile from './components/Profile/Profile';

import { Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialoguesContainer from './components/Dialogues/DialoguesContainer';
import FriendsContainer from './components/Friends/FriendsContainer';


const App = () => {
  return (
      <div className = { maincss.App }>
        <Header />
        <div className = { maincss.container }>
          <Menu />
          <Route path ='/Profile' render = { () => <Profile /> }/>
          <Route path ='/Dialogues' render = { () => <DialoguesContainer/> } />
          <Route path = '/Friends' render =  { () => <FriendsContainer /> } />
          <Route path ='/News' render = { News }/>
          <Route path ='/Music' render = { Music }/>
          <Route path = '/Settings' render = { Settings }/>
        </div>

        {/* END -- <App/> -- */}
      </div>


  );
}

export default App;
