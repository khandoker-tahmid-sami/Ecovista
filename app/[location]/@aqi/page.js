import AQIComponent from "@/components/AQIComponent";
import NoLocationInfo from "@/components/NoLocationInfo";
import { getResolvLatLon } from "@/lib/location-info";

const AQIPage = async ({ params, searchParams }) => {
  const { location } = params;
  const { latitude, longitude } = searchParams;

  const resolved = await getResolvLatLon(location, latitude, longitude);

  if (resolved?.lat && resolved?.lon) {
    return <AQIComponent lat={resolved.lat} lon={resolved.lon} />;
  } else {
    return <NoLocationInfo location={location} />;
  }
};

export default AQIPage;
