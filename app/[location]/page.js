import LocationInfo from "@/components/LocationInfo";
import NoLocationInfo from "@/components/NoLocationInfo";
import { getResolvLatLon } from "@/lib/location-info";

const page = async ({ params, searchParams }) => {
  const { location } = params;
  const { latitude, longitude } = searchParams;
  const resolved = await getResolvLatLon(location, latitude, longitude);
  if (resolved?.lat && resolved?.lon) {
    return <LocationInfo lat={resolved.lat} lon={resolved.lon} />;
  } else {
    return <NoLocationInfo location={location} />;
  }
};

export default page;
