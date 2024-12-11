
import { MapContainer, Marker, TileLayer, useMap,Popup } from 'react-leaflet'
 import 'leaflet/dist/leaflet.css';
const UpdateMapCenter = ({ position }) => {
    const map = useMap();
    map.setView(position); // מעדכן את המיקום של המפה
    return null; // לא מחזיר רכיב ויזואלי
  };
const ShowMap = ({selectedAddres}) => {
    const position = [selectedAddres.lat, selectedAddres.lon]
 
    return (<>

        <MapContainer style={{height:536,width:"50vw"}} center={position} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
             <UpdateMapCenter position={position} />
            <Marker position={position}>
                <Popup>
                   אנו נמצאים כרגע ב
                </Popup>
            </Marker>
        </MapContainer>

    </>);
}

export default ShowMap;



