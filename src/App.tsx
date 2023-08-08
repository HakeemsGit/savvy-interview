import { Marker } from "react-simple-maps";
import "react-simple-maps/dist";
import Destination from "./components/Destination";
import Plot from "./components/Plot";
import Path from "./components/Path"; 
import airports from "./datasets/airports.json";
import "./index.scss";
import { useState, useEffect } from 'react';
import destinationsJson from "./datasets/destinations.json"; 
import { distance } from './utilities';

console.clear();
const MAX_DISTANCE = 50.0;

function App() {
  const [origin, setOrigin] = useState('New York');
  const [destination, setDestination] = useState('Tokyo');
  const [path, setPath] = useState([]);

  useEffect(() => {
    const originJson = destinationsJson.find(city => city.name === origin);
    const destJson = destinationsJson.find(city => city.name === destination);

    if (originJson && destJson) {
      const calculatedPath = calculatePath(originJson, destJson);
      console.log("Calculated Path:", calculatedPath); // Debugging line
      setPath(calculatedPath);
    }
  }, [origin, destination]);

  return (
    <>
      <div>
        <Destination value={origin} onChange={e => setOrigin(e.target.value)} name="origin" />
        <Destination value={destination} onChange={e => setDestination(e.target.value)} name="dest" />
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
        <Path coordinates={path} />
      </Plot>
    </>
  );
}

function calculatePath(start, end) {
  let current = start;
  const path = [start];

  while (distance(current, end) > MAX_DISTANCE) {
    let nextStop = getNextStop(current, end);
    if (!nextStop) {
      console.error("No valid path found");
      break;
    }
    path.push(nextStop);
    current = nextStop;
  }

  path.push(end);
  return path.map(city => [city.x, city.y]); // Return array of coordinates
}

function getNextStop(current, end) {
  let closest = null;
  let minDist = Infinity;

  for (const city of destinationsJson) {
    if (city === current) continue;
    const distToCity = distance(current, city);
    const distCityToEnd = distance(city, end);

    if (distToCity < MAX_DISTANCE && distCityToEnd < minDist) {
      closest = city;
      minDist = distCityToEnd;
    }
  }

  return closest;
}

export default App;
