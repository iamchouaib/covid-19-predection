import dynamic from "next/dynamic";
import "mapbox-gl/dist/mapbox-gl.css";

const WorldMap = dynamic(() => import("../components/WorldMap/WorldMap"), {
  ssr: false,
});

export default function WorldmapPage() {
  return (
    <div className="full__width">
      <WorldMap />
    </div>
  );
}
