import './App.css'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <div className='container'>
        <Hero></Hero>
      </div>
    </>
  )
}

export default App
