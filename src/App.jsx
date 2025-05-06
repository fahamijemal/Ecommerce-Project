import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Register from './pages/Register';
import Login from './pages/Login'
import Navbar from './components/Navbar';

import './App.css';

function App() {
  return (
    <Router>
      <Navbar/>
      <div className="app-container">
        <main className='main-container'>
        <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        </Routes>

        </main>
        <Footer />
      </div>
    </Router>
  );
}
export default App;

/*export default App;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <Router>
      <div className="app">
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:slug" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
           <Footer />
        </main>
      </div>
    </Router>
  )
}

export default App;*/