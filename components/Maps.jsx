import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";

import CustomMarker from "./CustomMarker";
import MapEvents from "./MapEvents";

import "leaflet/dist/leaflet.css";

import { useSelector } from "react-redux";

import { v4 as uuidv4 } from "uuid";

export default function Maps() {
  const center = useSelector((state) => state.map.center);
  const markers = useSelector((state) => state.map.markers);

  return (
    <MapContainer
      center={center}
      zoom={18}
      style={{ height: "100%", width: "100%" }}
    >
      <MapEvents />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((marker) => (
        <CustomMarker marker={marker} key={uuidv4()} />
      ))}
    </MapContainer>
  );
}
