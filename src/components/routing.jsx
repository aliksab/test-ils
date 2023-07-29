import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";

const createRoutineMachineLayer = (props) => {
  const { waypoints } = props;
  const instance = L.Routing.control({
    waypoints,
    lineOptions: {
      styles: [{ color: "#6FA1EC", weight: 4 }]
    },
    language: 'ru',
    addWaypoints: false,
    routeWhileDragging: true,
    draggableWaypoints: false,
    fitSelectedRoutes: true,
    showAlternatives: false
  });

  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer)

export default RoutingMachine;
