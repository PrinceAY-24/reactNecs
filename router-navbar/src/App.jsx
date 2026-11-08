import './App.css'
import Navbar from './component/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import About from './routes/About'
import Product from './routes/Product'
import Contact from './routes/Contact'


function App() {
  return(
    <>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </div>
    </>
  )
}

export default App