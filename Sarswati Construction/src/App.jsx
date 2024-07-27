import React from 'react'
import Home from "./Components/Home/Home"
import AboutUs from "./Components/AboutUs/AboutUs"
import Projects from './Components/Projects/Projects'
import FloorPlans from './Components/FloorPlans/FloorPlans'
import Amenities from './Components/Amenities/Amenities'
import Specification from './Components/Specification/Specification'
import Contact from './Components/Contact/Contact'
import RoseAvenue from './Components/RoseAvenue/RoseAvenue'
import Footer from './Components/Footer/Footer'
import Backdrop2 from './Components/Backdrop2/Backdrop2'



function App() {

  return (
    <>
       <Home/>
       <AboutUs/>
       <RoseAvenue/>
       <Projects/>
       <FloorPlans/>
       <Amenities/>
       <Backdrop2/>
       <Specification/>
       {/* <Contact/> */}
      {/* <Footer/> */}
    </>
  )
}

export default App
