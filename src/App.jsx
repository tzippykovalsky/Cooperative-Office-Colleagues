import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Form'
import ShowMap from './ShowMap'

function App() {
  const [selectedAddres,setSelectedAddres]=useState({lat:"32.053888198971286",lon:"34.95844173528108"})

  //בעת טעינת הדף אלך ואמלא אותו
//במקום הנוכחי שלי
  return (
    <>
       <Form selectedAddres={selectedAddres} setSelectedAddres={setSelectedAddres}/> 
      <ShowMap selectedAddres={selectedAddres}/>
    </>
  )
}

export default App
