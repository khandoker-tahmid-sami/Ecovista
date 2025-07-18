import { getLocation } from "./location-utils";

export const GET = async () => {
  const locationData = getLocation();

  return Response.json(locationData);
};
