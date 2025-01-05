
import { useState } from 'react'
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
//לא עובד
//רוצה שיסע ליעד החדש 
//לקרוא על useMapEvents

function NewMap({selectedAddres}) {
  const position = [selectedAddres.lat, selectedAddres.lon]
function LocationMarker() {

  const map = useMapEvents({
    click() {
      map.locate()
    },
    locationfound(e) {
      setPosition(e.latlng)
      map.flyTo(e.latlng, map.getZoom())
    },
  })

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  )
}


  return (
    <MapContainer style={{height:536,width:"50vw"}} center={position} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
    </MapContainer>
  )
}
export default NewMap;