import { React, useEffect } from 'react';
import styles from '../pages/Home.module.css';
import logo from '../images/logo.png';

const Home = () => {
  useEffect(() => {
    document.title = "Prime Burger"
  }, [])
  
  return (
    <div className="App">
      <section className='App-body'>
        <div className={styles.mainContent}>
          <img src={logo} alt="Imagem - Logo do site" className={styles.logoImg}></img>
          <h1>Tela Principal</h1>
        </div>
      </section>
    </div>
  );
}
export default Home;