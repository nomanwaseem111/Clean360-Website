import React, { createContext } from "react"
import App from "./App"
import Navbar from "./components/Navbar"

export const AppContext = createContext();

const Context = () => {
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

  const obj = {
    homeRef,
    whyUsRef,
    servicesRef,
    aboutRef,
    contactRef,
    scrollToSection,
  }

  const name = 'sasd'
  return (
    <AppContext.Provider value={name}>
      <App />
      <Navbar />
    </AppContext.Provider>
  )
}

export default Context
