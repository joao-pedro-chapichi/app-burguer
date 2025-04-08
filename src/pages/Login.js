import { React, useEffect } from "react";
import styles from "../pages/Login.module.css";

const Login = () => {
  useEffect(() => {
    document.title = "Prime Burger - Logar";
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.leftSide}>
          <h1>Bem-vindo!</h1>
          <p>Preencha seus dados:</p>
          <input type="text" placeholder="Seu nome" />
          <input type="email" placeholder="Seu email" />
          <button>Logar</button>
        </div>
        <div className={styles.rightSide} />
      </div>
    </div>
  );
};

export default Login;
