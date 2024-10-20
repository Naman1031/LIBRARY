import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Set up the default icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
});

const getDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Radius of the Earth in kilometers
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Distance in kilometers
  return distance;
};

const UpdateMapBounds = ({ branches }) => {
  const map = useMap();

  useEffect(() => {
    if (branches.length > 0) {
      const bounds = L.latLngBounds(
        branches.map((branch) => [branch.lat, branch.lng])
      );
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [branches, map]);

  return null;
};

const LibraryMap = ({ branches, maxDistance = 5 }) => {
  const [location, setLocation] = useState([28.6139, 77.209]); // Default location set to Delhi
  const [nearbyBranches, setNearbyBranches] = useState([]);

  useEffect(() => {
    // Get user's current location
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const userLocation = [pos.coords.latitude, pos.coords.longitude];
        setLocation(userLocation);

        // Filter branches within the max distance
        const filteredBranches = branches.filter((branch) => {
          const distance = getDistance(
            pos.coords.latitude,
            pos.coords.longitude,
            branch.lat,
            branch.lng
          );
          return distance <= maxDistance; // Only include branches within the specified distance
        });
        setNearbyBranches(filteredBranches);
      },
      (error) => {
        console.error("Error fetching location", error);
      }
    );
  }, [branches, maxDistance]);

  return (
    <MapContainer
      center={location}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <UpdateMapBounds branches={nearbyBranches} />
      {nearbyBranches.map((branch, index) => (
        <Marker key={index} position={[branch.lat, branch.lng]}>
          <Popup>
            {branch.name}
            <br />
            {branch.address}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default LibraryMap;
