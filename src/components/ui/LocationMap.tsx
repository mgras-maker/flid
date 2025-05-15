import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

interface LocationMapProps {
  position: [number, number];
  zoom?: number;
  popupText?: string;
}

const LocationMap = ({ position, zoom = 15, popupText = 'Our Office' }: LocationMapProps) => {
  return (
    <MapContainer 
      center={position} 
      zoom={zoom} 
      scrollWheelZoom={false} 
      style={{ height: '100%', width: '100%', borderRadius: 'inherit' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          {popupText}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default LocationMap;
