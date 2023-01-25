import React, { createContext, useContext } from "react"
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Footer from "./components/Footer"
import "./index.css"
import { AppContext } from "./Context"


export const data = createContext()


const App = () => {
//  const context = useContext(AppContext);

   
 const name = "Noman"


 const homeRef = React.useRef(null)
  const whyUsRef = React.useRef(null)
  const servicesRef = React.useRef(null)
  const aboutRef = React.useRef(null)
  const contactRef = React.useRef(null)

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    })
  } 


  

  return (
    <data.Provider value={{homeRef,whyUsRef,servicesRef,aboutRef,contactRef,scrollToSection}}>
    
      <Router>
        <div>
          <Navbar />
          <Home />

          <Footer />
        </div>
      </Router>
    </data.Provider>
  )
}

export default App
