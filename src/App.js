import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Profile from './components/Profile';




const App = () => {
   return (
      <div className="App">

        <Header/>

        <main className="main-content">

          <div className="container">

            <Menu/>
            <Profile/>

          </div>
        </main>
         
      {/* <App /> */}  
      </div> 
      
    );
}



export default App;
