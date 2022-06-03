import { useMapEvents } from "react-leaflet/hooks";

export default function MapEvents() {
  const map = useMapEvents({
    moveend: () => {
      console.log("move");
    },
  });
  return null;
}
