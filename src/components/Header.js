import React from 'react'
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
 
const NavBar = () => {
    return (
      <nav className={styles.navbar}>
        <NavLink to="/" className={styles.brand}>
        </NavLink>
        <ul className={styles.links_list}>
          <li>
            <NavLink to="/">Home</NavLink>          
          </li>
          <li>
            <NavLink to="/login">Logar</NavLink>          
          </li>
          <li>
            <NavLink to="/contact">Contato</NavLink>          
          </li>
          <li>
            <NavLink to="/register">Cadastrar</NavLink>          
          </li>
          <li>
            <NavLink to="/about">Sobre</NavLink>          
          </li>
        </ul>
      </nav>
    );
  };
 
  export default NavBar