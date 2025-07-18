import NoLocationInfo from "@/components/NoLocationInfo";
import WeatherComponent from "@/components/WeatherComponent";
import { getResolvLatLon } from "@/lib/location-info";

const WeatherPage = async ({ params, searchParams }) => {
  const { location } = params;
  const { latitude, longitude } = searchParams;

  const resolved = await getResolvLatLon(location, latitude, longitude);
  if (resolved?.lat && resolved?.lon) {
    return <WeatherComponent lat={resolved.lat} lon={resolved.lon} />;
  } else {
    return <NoLocationInfo location={location} />;
  }
};

export default WeatherPage;
