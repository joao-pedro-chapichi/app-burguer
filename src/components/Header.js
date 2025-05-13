import React from 'react'
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png';
 
const NavBar = () => {
    return (
      <nav className={styles.navbar}>
        <NavLink to="/" className={styles.brand}>
          <img src={logo} alt="logo do site" className={styles.logo}></img>
          <h2>Prime Burger</h2>
        </NavLink>
        <ul className={styles.links_list}>
          <li>
            <NavLink to="/">Home</NavLink>          
          </li>
          <li>
            <NavLink to="/login">Logar</NavLink>          
          </li>
          <li>
            <NavLink to="/register">Cadastrar</NavLink>          
          </li>
          <li>
            <NavLink to="/store">Loja</NavLink>          
          </li>
          <li>
            <NavLink to="/contact">Contato</NavLink>          
          </li>
          <li>
            <NavLink to="/about">Sobre</NavLink>          
          </li>
        </ul>
      </nav>
    );
  };
 
  export default NavBar