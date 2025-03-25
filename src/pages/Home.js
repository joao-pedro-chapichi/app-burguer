import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../pages/Home.module.css'
import logo from '../images/logo.png';

const Home = () => {
  return (
    <div className="App">
      <section className='App-body'>
        <div className={styles.mainContent}>
          <img src={logo} className={styles.logoImg}></img>
          <h1>dasdadsd</h1>
        </div>
      </section>
    </div>
  );
}
export default Home;