import React from 'react';
import logo from './logo.svg';
import maincss from './App.module.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Profile from './components/Profile/Profile';
import Dialogues from './components/Dialogues/Dialogues';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = () => {
  return (
    <BrowserRouter>
      <div className = { maincss.App }>

        <Header />
        <div className = { maincss.container }>

          <Menu />
          <Route path ='/Profile' component = { Profile } />
          <Route path ='/Dialogues' component = { Dialogues } />
          <Route path ='/News' component = { News }/>
          <Route path ='/Music' component = { Music }/>
          <Route path = '/Settings' component = { Settings }/>

        </div>

        {/* END -- <App/> -- */}
      </div>
    </BrowserRouter>

  );
}

export default App;
