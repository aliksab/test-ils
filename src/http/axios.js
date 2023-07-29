import axios from "axios";
import { parsePoints } from "../helpers/OSRM";

export const fetchPolylines = (points) => {
  const OSRMUrl = "http://router.project-osrm.org";
  const request = {
    service: "route",
    version: "v1",
    profile: "driving",
    coordinates: parsePoints(points),
  };
  return axios.get(
    `${OSRMUrl}/${request.service}/${request.version}/${request.profile}/${request.coordinates}`,
  );
};