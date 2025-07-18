export const getLocationData = async (lat, lon) => {
  try {
    const response = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}`
    );
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e.message);
  }
};

export const getLocationList = async () => {
  try {
    const response = await fetch(`/api/location`);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e.message);
  }
};

export const getLocstionListByName = async (locationName) => {
  try {
    const response = await fetch(`/api/location/${locationName}`);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e.message);
  }
};

export const getResolvLatLon = async (location, lat, lon) => {
  if (lat && lon) {
    return { lat, lon };
  }

  const locationLatLon = await getLocstionListByName(location);

  if (locationLatLon.latitude && locationLatLon.longitude) {
    const lat = locationLatLon.latitude;
    const lon = locationLatLon.longitude;
    return { lat, lon };
  }
};

export const getTimeByLatLon = async (lat, lon) => {
  try {
    const response = await fetch(
      `http://api.timezonedb.com/v2.1/get-time-zone?key=${process.env.OPEN_TIME_API_KEY}&format=json&by=position&lat=${lat}&lng=${lon}`
    );
    const data = await response.json();
    return data.formatted;
  } catch (e) {
    console.log(e.message);
  }
};
