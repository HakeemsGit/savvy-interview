import * as React from "react";
import destinations from "../datasets/destinations.json";

export interface DestinationProps extends React.ComponentProps<"select"> {}

const Destination: React.FC<DestinationProps> = (props) => {
  return (
    <select {...props}>
      {destinations.map((d) => (
        <option key={d.name} value={d.name}>
          {d.name}
        </option>
      ))}
    </select>
  );
};

export default Destination;
