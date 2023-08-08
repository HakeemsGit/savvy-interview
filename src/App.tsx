import { Marker } from "react-simple-maps";
import "react-simple-maps/dist";
import Destination from "./components/Destination";
import Plot from "./components/Plot";
import airports from "./datasets/airports.json";
import "./index.scss";

console.clear();

function App() {
  return (
    <>
      <div>
        <Destination name="origin" />
        <Destination name="dest" />
      </div>

      <Plot>
        {airports.map((a) => (
          <Marker key={a.iata} coordinates={[a.x, a.y]} opacity={0.75}>
            <text textAnchor="middle" fill="#000" fontSize="4px">
              &bull;
            </text>
            <text
              textAnchor="middle"
              alignmentBaseline="before-edge"
              fill="#00f"
              fontSize="3px"
            >
              {a.iata}
            </text>
          </Marker>
        ))}
      </Plot>
    </>
  );
}

export default App;
