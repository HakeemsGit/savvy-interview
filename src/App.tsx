import { Marker } from "react-simple-maps";
import "react-simple-maps/dist";
import Destination from "./components/Destination";
import Plot from "./components/Plot";
import Point from "./components/Point";
import airports from "./datasets/airports.json";
import "./index.scss";
import { useState } from 'react';
import Start from "./components/Start";
import desintationsJson from "./datasets/destinations.json";


console.clear();

function App() {
  const [origin, setOrigin] = useState('New York');
  const [destination, setDestination] = useState('Tokyo');
  let originJson = undefined
  
  // when there's a val for origin find which city is selected 
  if (origin) originJson = desintationsJson.find(originSearch => originSearch.name === origin);

  return (
    <>
      <div>
        <Destination value={origin} onChange={e => setOrigin(e.target.value)} name="origin" />
        <Destination value={destination} onChange={e => setDestination(e.target.value)} name="dest" />


        {/* <Start cityName=""/> */}
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
        {
            // if origin json exists return point else nothing
            originJson && <Point {...originJson} ></Point>
        }

      </Plot>
    </>
  );
}

export default App;
