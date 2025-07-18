import LocationDetector from "@/components/LocationDetector";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Suspense fallback={null}>
        <LocationDetector />
      </Suspense>
    </div>
  );
}
