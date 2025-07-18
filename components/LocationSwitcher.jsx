"use client";
import { getLocationList } from "@/lib/location-info";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const LocationSwitcher = () => {
  const [showLocationList, setShowLocationList] = useState(false);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const getLocations = async () => {
      const locationList = await getLocationList();
      setLocations(locationList);
    };

    getLocations();
  }, []);
  return (
    <div className="relative">
      <button onClick={() => setShowLocationList(!showLocationList)}>
        <Image
          className="size-9"
          src="/link.svg"
          alt="link icon"
          width={50}
          height={50}
        />
      </button>
      {showLocationList && (
        <div className="absolute left-0 top-12 z-[999] w-full max-h-[300px] min-w-[280px] overflow-y-auto rounded-md bg-white p-4 shadow max-md:-translate-x-1/2">
          <ul
            role="list"
            className="divide-y divide-gray-100 [&>*]:py-2 [&>li]:cursor-pointer"
          >
            {locations.map((info) => (
              <li
                key={info.location}
                className="transition rounded-md px-3 py-2 hover:bg-slate-100 hover:text-sky-600"
              >
                <Link
                  href={`/${info.location}?latitude=${info.latitude}&longitude=${info.longitude}`}
                >
                  {info.location}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LocationSwitcher;
