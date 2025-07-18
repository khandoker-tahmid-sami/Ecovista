"use client";

import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const LocationDetector = () => {
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  //   console.log(searchParams);
  const pathName = usePathname();
  //   console.log(pathName);
  const router = useRouter();
  //   console.log(router);

  useEffect(() => {
    setLoading(true);
    const params = new URLSearchParams(searchParams);
    // console.log(params);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        params.set("latitude", position.coords.latitude);
        params.set("longitude", position.coords.longitude);
        setTimeout(() => {
          setLoading(false);
          router.push(`/current?${params.toString()}`);
        }, 1000);
      });
    }
  }, [pathName, searchParams]);
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-slate-700 text-white">
      {loading && (
        <>
          <Image
            src="/network.gif"
            alt="loading..."
            height={500}
            width={500}
            className="border rounded-md my-4"
          />
          <p className="text-4xl text-center">Dectecting location...</p>
        </>
      )}
    </div>
  );
};

export default LocationDetector;
