import React, { useEffect, useRef } from "react";
import L from 'leaflet';
import { useSelector } from "react-redux";
import "leaflet-routing-machine";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'
import { decode } from "google-polyline";
import 'leaflet/dist/leaflet.css';
import RoutingMachine from "./routing";
import { parsePoints } from "../helpers/OSRM";
import { fetchPolylines } from "../http/axios";
L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.5.0/dist/images/";

const Map = () => {
  const rMachine = useRef();
  const getState = useSelector((state) => state.routers);
  const getRoute = [];
  let checkRoute = getState.findIndex(el => {
    if (el.checked === true) {
      return el
    } 
  });
  getState[checkRoute].routes.map(el => {
    return getRoute.push(el.geocode);
  })
  parsePoints(getRoute);

 useEffect(() => {
    if (rMachine.current) {
      rMachine.current.setWaypoints(getRoute);
    }
  }, [getRoute, rMachine]);
  {console.log(parsePoints(getRoute));}
  return (
    <MapContainer center={[59.82934196, 30.42423701]} zoom={15} scrollWheelZoom={true} preferCanvas>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Polyline positions={decode(parsePoints(getRoute))} />
      
      {/* {arr.map(marker => {
        return (
          <Marker position={marker.geocode}>
            <Popup>
              Точка {marker.id}
            </Popup>
          </Marker>
        )
        
      })} */}

      
      <RoutingMachine ref={rMachine} waypoints={getRoute}/>
    </MapContainer>
  );
}
 
export default Map;
