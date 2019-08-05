import React from 'react';
import menu from './Menu.module.css'
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <section className = { menu.menu }>
              <nav className = { menu.nav }>
                <Link to = "/Profile"> My profile </Link>
                <Link to = "/Dialogues"> Dialogues </Link>
                <Link to = "/News"> News </Link>
                <Link to = "/Music"> Music </Link>
                <Link to = "/Settings"> Settings </Link>
              </nav>

            </section>
  );
}

export default Menu