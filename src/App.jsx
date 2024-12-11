import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Form'
import ShowMap from './ShowMap'

function App() {
  const [selectedAddres, setSelectedAddres] = useState({ lat: "31.9521108", lon: "34.906551" })

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setSelectedAddres({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
          console.log(position);
          
        },
      
        (error) => {
          console.error("Error fetching location:", error);
        }
      );
    } else {
      console.error("Geolocation not supported by this browser.");

    }
  }, []);
  //בעת טעינת הדף אלך ואמלא אותו
  //במקום הנוכחי שלי
  //לראות לשנות את זה בצורה אחרת??????
  return (
    <>
      <Form selectedAddres={selectedAddres} setSelectedAddres={setSelectedAddres} />
      <ShowMap selectedAddres={selectedAddres} />
    </>
  )
}

export default App
