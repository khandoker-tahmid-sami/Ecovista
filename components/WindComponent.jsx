import { getWindData } from "@/lib/weather-info";
import Image from "next/image";
import CardComponent from "./CardComponent";

const WindComponent = async ({ lat, lon }) => {
  const windData = await getWindData(lat, lon);
  //   console.log(windData);
  if (!windData) {
    return (
      <CardComponent>
        <h6 className="feature-name">Wind</h6>
        <div className="feature-main">
          <p className="text-white text-center text-xl">
            Unable to fetch wind data.
          </p>
        </div>
      </CardComponent>
    );
  }

  const { speed, deg } = windData;

  return (
    <CardComponent>
      <h6 className="feature-name">Wind</h6>
      <div className="feature-main">
        <Image
          className="max-w-20"
          src="/icon_wind.png"
          alt="rain icon"
          width={50}
          height={50}
        />
        <h3 className="feature-title">{speed} meter/sec</h3>
        <span className="feature-name">{deg} degrees</span>
      </div>
    </CardComponent>
  );
};

export default WindComponent;
