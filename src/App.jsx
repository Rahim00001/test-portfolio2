import './App.css'
import ContactMe from './Components/ContactMe/ContactMe'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Skills from './Components/Skills/Skills'
import SocialIcons from './Components/SocialIcons/SocialIcons'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <div className='container'>
        <Hero></Hero>
        <Skills></Skills>
        <ContactMe></ContactMe>
        <SocialIcons></SocialIcons>
      </div>
    </>
  )
}

export default App
