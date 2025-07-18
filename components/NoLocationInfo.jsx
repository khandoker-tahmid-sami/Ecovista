import Link from "next/link";
import CardComponent from "./CardComponent";

const NoLocationInfo = ({ location }) => {
  return (
    <CardComponent>
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <p className="text-lg font-semibold text-white-500">
          No location data found for{" "}
          <span className="text-green-500 font-bold">{location}</span>
        </p>
        <Link
          href="/"
          className="mt-2 inline-block rounded-md bg-sky-600 px-4 py-2 text-white transition hover:bg-sky-700"
        >
          Go to Home Page
        </Link>
      </div>
    </CardComponent>
  );
};

export default NoLocationInfo;
