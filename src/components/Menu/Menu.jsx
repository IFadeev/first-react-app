import React from 'react';
import menu from './Menu.module.css'
import { BrowserRouter, Route, Link } from 'react-router-dom';

const Menu = () => {
  return (
    <section className={menu.menu}>
              <nav className={menu.nav}>
                <a href="/Profile">My profile</a>
                <a href="/Dialogues">Messages</a>
                <a href="/News">News</a>
                <a href="/Music">Music</a>
                <a href="/Settings">Settings</a>
              </nav>

            </section>
  );
}

export default Menu