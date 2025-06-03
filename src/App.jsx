import { Routes, Route } from 'react-router-dom';
import './App.css'
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import Footer from './components/Footer.jsx'
import Menu from './components/Menu.jsx';
import About from './components/About.jsx'

function App() {

  return (
    <>
      <Navbar/> 
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      <Footer/>
    </>
     
  )
}

export default App
