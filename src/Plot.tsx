import * as React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  ZoomableGroup,
} from "react-simple-maps";

export interface PlotProps {
  children: React.ReactNode;
}

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const Plot: React.FC<PlotProps> = ({ children }) => {
  return (
    <ComposableMap className="Plot" projectionConfig={{ scale: 180 }}>
      <ZoomableGroup>
        <Sphere
          id="border"
          stroke="#000"
          fill="rgb(245,245,245)"
          strokeWidth={0.5}
        />
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                z={1}
                key={geo.rsmKey}
                geography={geo}
                fill="grey"
                stroke="slategrey"
                strokeWidth={0.25}
                opacity={0.2}
              />
            ))
          }
        </Geographies>
        {children}
      </ZoomableGroup>
    </ComposableMap>
  );
};

export default Plot;
