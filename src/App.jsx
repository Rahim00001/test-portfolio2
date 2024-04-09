import './App.css'
import ContactMe from './Components/ContactMe/ContactMe'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Skills from './Components/Skills/Skills'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <div className='container'>
        <Hero></Hero>
        <Skills></Skills>
        <ContactMe></ContactMe>
      </div>
    </>
  )
}

export default App
