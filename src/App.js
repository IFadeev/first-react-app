import React from 'react';
import logo from './logo.svg';
import maincss from './App.module.css';
import Header from './components/Header';
import Menu from './components/Menu.jsx';
import Profile from './components/Profile.jsx';




const App = () => {
   return (
      <div className={maincss.App}>

        <Header/>
          <div className={maincss.container}>

            <Menu/>
            <Profile/>
            
          </div>
        
         
      {/* <App /> */}  
      </div> 
      
    );
}



export default App;
