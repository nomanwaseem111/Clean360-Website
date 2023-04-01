import React, { createContext,useState } from "react"
import Navbar from "./components/Navbar"
import { BrowserRouter as Router } from "react-router-dom"
import Home from "./components/Home"
import Footer from "./components/Footer"
import "./index.css"
import 'bootstrap/dist/css/bootstrap.min.css';

export const data = createContext()


const App = () => {
//  const context = useContext(AppContext);

   


 const homeRef = React.useRef(null)
  const whyUsRef = React.useRef(null)
  const servicesRef = React.useRef(null)
  const aboutRef = React.useRef(null)
  const contactRef = React.useRef(null)
  const reviewRef = React.useRef(null)

  const [openDrawer, setOpenDrawer] = useState(false)

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",

    })
    setOpenDrawer(false)
  } 



  return (
    <data.Provider value={{homeRef,whyUsRef,servicesRef,aboutRef,contactRef,reviewRef,scrollToSection,openDrawer,setOpenDrawer}}>
    
      <Router>
        <div>
          <h1>Comming soon</h1>
          {/* <Navbar /> */}
          {/* <Home ref={homeRef} /> */}
          {/* <BottomBtn/> */}
          {/* <Footer ref={contactRef}/> */}
        </div>
      </Router>
    </data.Provider>
  )
}

export default App
