import NoLocationInfo from "@/components/NoLocationInfo";
import WindComponent from "@/components/WindComponent";
import { getResolvLatLon } from "@/lib/location-info";

const WindPage = async ({ params, searchParams }) => {
  const { location } = params;
  const { latitude, longitude } = searchParams;
  const resolved = await getResolvLatLon(location, latitude, longitude);
  if (resolved?.lat && resolved?.lon) {
    return <WindComponent lat={resolved.lat} lon={resolved.lon} />;
  } else {
    return <NoLocationInfo location={location} />;
  }
};

export default WindPage;
