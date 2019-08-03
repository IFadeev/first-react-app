import React from 'react';
import logo from './logo.svg';
import maincss from './App.module.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Profile from './components/Profile/Profile';





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
