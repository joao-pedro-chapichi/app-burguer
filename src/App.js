// import logo from './images/logo.png';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Contact from './pages/Contact';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Register from './pages/Register';
 
function App() {
  return (
    <div className="App">
      <header className="App-header">

      <BrowserRouter>
        <div className="container">
        <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Gerenciador de Tarefas e Relatórios para TO
        </p> */}
       </header>
       <Footer/>
    </div>
  );
}
 
export default App;