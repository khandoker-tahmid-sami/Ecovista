import { getWeatherData } from "@/lib/weather-info";
import Image from "next/image";
import CardComponent from "./CardComponent";
const WeatherComponent = async ({ lat, lon }) => {
  const { main, description } = await getWeatherData(lat, lon);
  return (
    <CardComponent>
      <h6 className="feature-name">Current Weather</h6>
      <div className="feature-main">
        <Image
          className="max-w-20"
          src="/icon_rain.png"
          alt="rain icon"
          width={50}
          height={50}
        />
        <h3 className="feature-title">{main}</h3>
        <span className="feature-name">{description}</span>
      </div>
    </CardComponent>
  );
};

export default WeatherComponent;
