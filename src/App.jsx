import './App.css'
import Nav from './Nav'
import Home from './Home'
import About from './About'
import Menu from './Menu'
import Gallery from './Gallery'
import Contact from './Contact'
import Footer from './Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
    <Router>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </Router>
    </>
  )
}

export default App
