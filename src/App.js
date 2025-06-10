// import logo from './images/logo.png';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Contact from './pages/Contact';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Store from './pages/Store';

import Painel from './pages/Painel';
import Products from './pages/Product';
import Brand from './pages/Brand';
import PublicLayout from './components/PublicLayout';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <BrowserRouter>
          <div className="container">
            <Header />
            <Routes>
              <Route element={<PublicLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/store" element={<Store />} />
                <Route path="/contact" element={<Contact />} />
                <Route path='/about' element={<About />} />
              </Route>

              <Route path="/painel" element={<Painel />}>
                <Route path="products" element={<Products />} />
                <Route path="brand" element={<Brand />} />
              </Route>
            </Routes>
          </div>
        </BrowserRouter>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Gerenciador de Tarefas e Relatórios para TO
        </p> */}
      </header>
      <Footer />
    </div>
  );
}

export default App;