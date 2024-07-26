import "./App.css"
import Home from "./Pages/Home"
import NavBar from "./Components/NavBar"
import Footer from "./Components/Footer"
import About from "./Pages/About"
import Loader from "./Components/Loader"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { useEffect, useState } from "react"


function App() {

  useEffect(() => {
    setTimeout(()=>{
      setLoaderFalse(false)
      console.log("helo")
    }, 3000) 
  },);

  const [loaderFalse, setLoaderFalse] = useState(false);

  return (
    <>
      {loaderFalse ? <Loader/> : 
    <Router>
      <NavBar/>
        <Routes>
          <Route element={<Home/>} path="/"/> 
          <Route element={<About/>} path="/about"/> 
        </Routes>
      <Footer/>
    </Router>
        }
    </>
  )
}

export default App
