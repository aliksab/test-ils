import React from "react";
import { Polyline } from "react-leaflet";

export const Polylines = ({ positions }) => {
  return <Polyline positions={positions} color={"red"} />;
};

export default Polylines;