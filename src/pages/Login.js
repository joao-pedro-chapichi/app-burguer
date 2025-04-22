import { React, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import styles from "../pages/Login.module.css";

const Login = () => {
  useEffect(() => {
    document.title = "Prime Burger - Logar";
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.leftSide}>
          <h1>Preencha seus dados abaixo para Logar</h1>
          <form>
            <input type="email"  required placeholder="Email" />
            <input type="password" required placeholder="Senha" />
            <button>Logar</button>
          </form>
          <NavLink to="/register" className={styles.createAccount}>Não possui conta? Clique aqui</NavLink>
          <NavLink to="/" className={styles.backHome}>Voltar ao Inicio</NavLink>
        </div>
        <div className={styles.rightSide} />
      </div>
    </div>
  );
};

export default Login;
