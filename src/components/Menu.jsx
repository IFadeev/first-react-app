import React from 'react';
import menu from './Menu.module.css'

const Menu = () => {
  return (
    <section className={menu.menu}>
              <nav className={menu.nav}>
                <a href="#">My profile</a>
                <a href="#">News</a>
                <a href="#">Messages</a>
                <a href="#">Music</a>
                <a href="#">Settings</a>
              </nav>

            </section>
  );
}

export default Menu