import React from "react";
import { Marker } from "react-leaflet/Marker";

export default function CustomMarker({ marker }) {
  let icon;
  if (marker.type === "cluster") {
    icon = L.divIcon({
      html: `<div class="cluster-marker"><span>${marker.number}</span></div>`,
      iconAnchor: [13, 35],
    });
  } else {
    icon = L.icon({
      iconUrl: `images\\${marker.type}.svg`,
      iconAnchor: [13, 35],
    });
  }
  return <Marker position={marker.coords} icon={icon} />;
}
