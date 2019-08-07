import React from 'react';
import maincss from './App.module.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Profile from './components/Profile/Profile';
import Dialogues from './components/Dialogues/Dialogues';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';


const App = (props) => {
  
  return (
    <BrowserRouter>
      <div className = { maincss.App }>

        <Header />
        <div className = { maincss.container }>

          <Menu />
          <Route path ='/Profile' render = { () => <Profile postData = {props.postData}/>  } />
          <Route path ='/Dialogues' render = { Dialogues } />
          <Route path ='/News' render = { News }/>
          <Route path ='/Music' render = { Music }/>
          <Route path = '/Settings' render = { Settings }/>

        </div>

        {/* END -- <App/> -- */}
      </div>
    </BrowserRouter>

  );
}

export default App;
