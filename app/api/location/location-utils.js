const data = [
  { location: "London", latitude: 51.5072, longitude: -0.1275 },
  { location: "Dhaka", latitude: 23.7639, longitude: 90.3889 },
  { location: "Oslo", latitude: 59.9133, longitude: 10.7389 },
  { location: "Bergen", latitude: 60.3894, longitude: 5.33 },
  { location: "Stavanger", latitude: 58.97, longitude: 5.7314 },
  { location: "Trondheim", latitude: 63.4297, longitude: 10.3933 },
  { location: "Kristiansand", latitude: 58.1472, longitude: 7.9972 },
  { location: "Asker", latitude: 59.8353, longitude: 10.435 },
  { location: "Riga", latitude: 56.9489, longitude: 24.1064 },
  { location: "Berlin", latitude: 52.52, longitude: 13.405 },
  { location: "Rome", latitude: 41.8933, longitude: 12.4828 },
  { location: "Riyadh", latitude: 24.6333, longitude: 46.7167 },
  { location: "New York", latitude: 40.7128, longitude: -74.006 },
  { location: "Tokyo", latitude: 35.6895, longitude: 139.6917 },
  { location: "Paris", latitude: 48.8566, longitude: 2.3522 },
  { location: "Sydney", latitude: -33.8688, longitude: 151.2093 },
  { location: "Toronto", latitude: 43.6511, longitude: -79.347 },
  { location: "Beijing", latitude: 39.9042, longitude: 116.4074 },
  { location: "Cairo", latitude: 30.0444, longitude: 31.2357 },
  { location: "Lagos", latitude: 6.5244, longitude: 3.3792 },
  { location: "Cape Town", latitude: -33.9249, longitude: 18.4241 },
  { location: "Helsinki", latitude: 60.1695, longitude: 24.9354 },
  { location: "Madrid", latitude: 40.4168, longitude: -3.7038 },
  { location: "Athens", latitude: 37.9838, longitude: 23.7275 },
  { location: "Bangkok", latitude: 13.7563, longitude: 100.5018 },
  { location: "Istanbul", latitude: 41.0082, longitude: 28.9784 },
  { location: "Kuala Lumpur", latitude: 3.139, longitude: 101.6869 },
  { location: "Seoul", latitude: 37.5665, longitude: 126.978 },
  { location: "Moscow", latitude: 55.7558, longitude: 37.6176 },
  { location: "Buenos Aires", latitude: -34.6037, longitude: -58.3816 },
  { location: "Lima", latitude: -12.0464, longitude: -77.0428 },
  { location: "Jakarta", latitude: -6.2088, longitude: 106.8456 },
  { location: "Dubai", latitude: 25.276987, longitude: 55.296249 },
  { location: "San Francisco", latitude: 37.7749, longitude: -122.4194 },
  { location: "Chicago", latitude: 41.8781, longitude: -87.6298 },
  { location: "Mexico City", latitude: 19.4326, longitude: -99.1332 },
  { location: "Santiago", latitude: -33.4489, longitude: -70.6693 },
  { location: "Tehran", latitude: 35.6892, longitude: 51.389 },
  { location: "Warsaw", latitude: 52.2297, longitude: 21.0122 },
  { location: "Vienna", latitude: 48.2082, longitude: 16.3738 },
  { location: "Budapest", latitude: 47.4979, longitude: 19.0402 },
  { location: "Prague", latitude: 50.0755, longitude: 14.4378 },
  { location: "Copenhagen", latitude: 55.6761, longitude: 12.5683 },
  { location: "Zurich", latitude: 47.3769, longitude: 8.5417 },
];

const getLocation = () => {
  return data;
};

const getLocationByName = (location) => {
  if (!location) return null;

  const found = data.find(
    (item) => item.location.toLocaleLowerCase() === location.toLocaleLowerCase()
  );

  return found || {};
};

export { getLocation, getLocationByName };
