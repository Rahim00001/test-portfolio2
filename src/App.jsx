import './App.css'
import AboutMe from './Components/AboutMe/AboutMe'
import ContactMe from './Components/ContactMe/ContactMe'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Projects from './Components/Projects/Projects'
import Skills from './Components/Skills/Skills'
import SocialIcons from './Components/SocialIcons/SocialIcons'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <div className='container'>
        <Hero></Hero>
        <AboutMe></AboutMe>
        <Skills></Skills>
        <Projects></Projects>
        <ContactMe></ContactMe>
        <Footer></Footer>
        <SocialIcons></SocialIcons>
      </div>
    </>
  )
}

export default App
