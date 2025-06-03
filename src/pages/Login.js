import { useEffect, useState } from "react";
import { useAuthentication } from '../hooks/useAthentication'
import { NavLink } from 'react-router-dom';
import styles from "../pages/Login.module.css";

const Login = () => {
  const [displayEmail, setEmail] = useState('');
  const [displayPassword, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("")

    const user = {
      email: displayEmail,
      password: displayPassword
    }

    const res = await login(user);
  }
  useEffect(() => {
    if (authError) {
      setError(authError)
    }

    document.title = "Prime Burger - Logar";
  }, [authError]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.leftSide}>
          <h1>Preencha seus dados abaixo para Logar</h1>
          <form onSubmit={handleSubmit}>
            <input type="email" value={displayEmail} onChange={(e) => setEmail(e.target.value)} required placeholder="Email" />
            <input type="password" value={displayPassword} onChange={(e) => setPassword(e.target.value)} required placeholder="Senha" />
            {!loading && <button className="btn">Logar</button>}
            {loading && <button className="btn" disabled>Aguarde...</button>}
            {error && <p className="error">{error}</p>}
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
