import React, {useState} from 'react'
import FirstSection from '../compoent/FirstSection'
import Footer from '../compoent/Footer'
import {homeObjOne, homeObjThree, homeObjTwo } from '../compoent/InfoSection/Data'
import MainSection from '../compoent/InfoSection/Index'
import Navbar from '../compoent/NavBar'
import Services from '../compoent/Services'
import TopBar from '../compoent/TopBar'

const Home = () => {
const [isOpen, setIsOpen] = useState(false)

const toggle = () => {
    setIsOpen(!isOpen)
}

    return (
        <>
         <TopBar isOpen={isOpen} toggle={toggle}/>
         <Navbar toggle={toggle} />   
         <FirstSection/>
         <MainSection {...homeObjOne}/>
         <MainSection {...homeObjTwo}/>
         <Services/>
         <MainSection {...homeObjThree}/>
         <Footer/>
        </>
    )
}

export default Home
