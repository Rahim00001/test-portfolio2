import './App.css'
import AboutMe from './Components/AboutMe/AboutMe'
import ContactMe from './Components/ContactMe/ContactMe'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Projects from './Components/Projects/Projects'
import Skills from './Components/Skills/Skills'
import SocialIcons from './Components/SocialIcons/SocialIcons'
import Footer from './Components/Footer/Footer'
import ScrollToTop from './Components/ScrollToTop/ScrollToTop'

function App() {

  return (
    <>
      <div className='bg-opacity-10 backdrop-blur-50 sticky top-0 z-30'>
        <Navbar></Navbar>
      </div>
      <div className='overflow-hidden'>
        <div className='container'>
          <Hero></Hero>
          <AboutMe></AboutMe>
          <Skills></Skills>
          <Projects></Projects>
          <ContactMe></ContactMe>
          <Footer></Footer>
          <SocialIcons></SocialIcons>
          <ScrollToTop></ScrollToTop>
        </div>
      </div>
    </>
  )
}

export default App
