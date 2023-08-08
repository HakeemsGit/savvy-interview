import * as React from "react";
import { Line, Point } from "react-simple-maps";

export interface PathProps {
  coordinates: Point[];
}

const Path: React.FC<PathProps> = ({ coordinates }) => {
  return <Line coordinates={coordinates} strokeWidth={1} stroke="#f00" />;
};

export default Path;
