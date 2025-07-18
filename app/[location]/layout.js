import Image from "next/image";
import "../globals.css";

export const metadata = {
  title: "Ecovista",
  description: "A weather related dashboard",
};

export default function ParallelLayout({
  children,
  aqi,
  temparature,
  wind,
  weather,
}) {
  return (
    <div className="wrapper">
      <Image
        src="/background.png"
        className="bg-img"
        alt="background-image"
        fill
        priority
      />
      <div className="overlay"></div>

      <main className="!z-50 w-full">
        <div className="container">
          <div className="grid grid-cols-12 gap-y-8 py-16 lg:gap-8 2xl:gap-20 2xl:py-20">
            <div className="col-span-12">{children}</div>
            {weather}
            {aqi}
            {wind}
            {temparature}
          </div>
        </div>
      </main>
    </div>
  );
}
