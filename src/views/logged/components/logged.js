import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const center = [52.22977, 21.01178];


function Mapexample (){
    return (
      <div id="art">
        <MapContainer center={[45.4, -75.7]} zoom={12}scrollWheelZoom={false}>
          <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
        </MapContainer>
    </div>
    );
    
}

export default Mapexample;