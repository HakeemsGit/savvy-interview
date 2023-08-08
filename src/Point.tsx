import * as React from "react";
import { Marker } from "react-simple-maps";

export interface PointProps {
  x: number;
  y: number;
  name: string;
}

const Point: React.FC<PointProps> = ({ x, y, name }) => {
  return (
    <Marker coordinates={[x, y]}>
      <circle r={1.5} fill="#f00" />
      <text textAnchor="middle" fill="#F00" fontSize="10px">
        {name}
      </text>
    </Marker>
  );
};

export default Point;
