import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import MapMarker from './MapMarking';

// Mock data - replace with actual API calls
const mockLocations = [
  {
    id: '1',
    type: 'victim',
    position: [40.7128, -74.0060],
    name: 'John Doe',
    details: 'Needs medical assistance and food supplies',
  },
  {
    id: '2',
    type: 'volunteer',
    position: [40.7150, -74.0080],
    name: 'Jane Smith',
    details: 'Medical professional, available 24/7',
  },
  {
    id: '3',
    type: 'victim',
    position: [40.7140, -74.0030],
    name: 'Mike Johnson',
    details: 'Requires evacuation assistance',
  },
];

export default function Map() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    // Simulate API call
    const fetchLocations = () => {
      setLocations(mockLocations);
    };

    fetchLocations();
    // Set up polling every 30 seconds
    const interval = setInterval(fetchLocations, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[600px] rounded-lg overflow-hidden shadow-lg">
      <MapContainer
        center={[40.7128, -74.0060]}
        zoom={13}
        className="w-full h-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((location) => (
          <MapMarker key={location.id} location={location} />
        ))}
      </MapContainer>
    </div>
  );
}