import { getTemparatureData } from "@/lib/weather-info";
import Image from "next/image";
import CardComponent from "./CardComponent";

const TemparatureComponent = async ({ lat, lon }) => {
  const { temp, feels_like, temp_min, temp_max } = await getTemparatureData(
    lat,
    lon
  );
  return (
    <CardComponent>
      <h6 className="feature-name">Current Temperature</h6>
      <div className="feature-main">
        <Image
          className="max-w-20"
          src="/icon_tempareture.png"
          alt="rain icon"
          width={50}
          height={50}
        />
        <h3 className="feature-title">{temp}</h3>

        <span className="feature-name">Feels Like: {feels_like}</span>
        <span className="feature-name">Temp min: {temp_min}</span>
        <span className="feature-name">Temp max: {temp_max}</span>
      </div>
    </CardComponent>
  );
};

export default TemparatureComponent;
