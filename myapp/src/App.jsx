import React, { useState } from 'react'
import './App.css'
import Navbar from '../components/Navbar'
import BelowSection from '../components/BelowSection'
import TextForm from '../components/TextForm'
import AboutDarkMode from '../components/AboutDarkMode'
import Alters from '../components/Alters'

function App() {
  // const [count, setCount] = useState(0)
  //const [mode, setmode] = useState('light')

  const [alert, setAlert] = useState(null)

  const showalter = (message, type) => {
    setAlert({msg: message, type: type})
    setTimeout(()=>{
      setAlert(null);
    }, 2000)
  }

 
  return (
    <>
  <Navbar />
  {/* <BelowSection /> */}
  <Alters alter = {alert} showalter={showalter} />
  <TextForm  header = "Textarea" showalter={showalter} />
  {/* <div><h1>hello</h1></div> */}
  {/* <AboutDarkMode /> */}
    </>
  )
}

export default App
