import "./App.css"
import Home from "./Pages/Home"
import NavBar from "./Components/NavBar"
import Footer from "./Components/Footer"
import About from "./Pages/About"
import Loader from "./Components/Loader"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { useEffect, useState } from "react"
import Shop from "./Pages/Shop"


function App() {

  useEffect(() => {
    const timer = Math.floor(Math.random() * (3000 - 1000 + 1) + 1000 )
    setTimeout(()=>{
      setLoaderFalse(false)
    }, timer) 
  },);

  const [loaderFalse, setLoaderFalse] = useState(true);

  return (
    <>
      {loaderFalse ? <Loader/> : 
    <Router>
      <NavBar/>
        <Routes>
          <Route element={<Home/>} path="/"/> 
          <Route element={<About/>} path="/about"/> 
          <Route element={<Shop/>} path="/shop"/> 
        </Routes>
      <Footer/>
    </Router>
        }
    </>
  )
}

export default App
