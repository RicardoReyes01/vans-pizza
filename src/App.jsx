import { Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import Footer from './components/Footer.jsx'
import Menu from './components/Menu.jsx';

function App() {

  return (
    <>
      <Navbar/> 
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/menu' element={<Menu/>}/>
      </Routes>
      <Footer/>
    </>
     
  )
}

export default App
