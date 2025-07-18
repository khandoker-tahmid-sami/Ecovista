import NoLocationInfo from "@/components/NoLocationInfo";
import TemparatureComponent from "@/components/TemparatureComponent";
import { getResolvLatLon } from "@/lib/location-info";

const TemparaturePage = async ({ params, searchParams }) => {
  const { location } = params;
  const { latitude, longitude } = searchParams;

  const resolved = await getResolvLatLon(location, latitude, longitude);

  if (resolved?.lat && resolved?.lon) {
    return <TemparatureComponent lat={resolved.lat} lon={resolved.lon} />;
  } else {
    return <NoLocationInfo location={location} />;
  }
};

export default TemparaturePage;
