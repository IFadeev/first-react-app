import React from 'react';
import menu from './Menu.module.css';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <section className = { menu.menu }>
              <nav className = { menu.nav }>
                <NavLink to = '/Profile'> My profile </NavLink>
                <NavLink to = '/Dialogues'> Dialogues </NavLink>
                <NavLink to = '/Friends'> Friends </NavLink>
                <NavLink to = '/News'> News </NavLink>
                <NavLink to = '/Music'> Music </NavLink>
                <NavLink to = '/Settings'> Settings </NavLink>
              </nav>

            </section>
  );
}

export default Menu