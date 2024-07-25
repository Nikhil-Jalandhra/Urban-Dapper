import "./App.css"
import Home from "./Pages/Home"
import NavBar from "./Components/NavBar"
import Footer from "./Components/Footer"
import About from "./Pages/About"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {

  return (
    <>
    <Router>
      <NavBar/>
        <Routes>
          <Route element={<Home/>} path="/"/> 
          <Route element={<About/>} path="/about"/> 
        </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
