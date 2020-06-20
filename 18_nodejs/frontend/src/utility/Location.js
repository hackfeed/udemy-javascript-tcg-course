const GOOGLE_API_KEY = "";

export const getAddressFromCoords = (coordinates) => {
  return fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coordinates.lat},${coordinates.lng}&key=${GOOGLE_API_KEY}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to fetch coordinates!");
    }

    return response.json().then((data) => {
      if (data.error_message) {
        throw new Error(data.error_message);
      }

      return data.results[0].formatted_address;
    });
  });
};

export const getCoordsFromAddress = (address) => {
  const urlAddress = encodeURI(address);

  return fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${urlAddress}&key=${GOOGLE_API_KEY}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to fetch coordinates!");
    }

    return response.json().then((data) => {
      if (data.error_message) {
        throw new Error(data.error_message);
      }

      return data.results[0].geometry.location;
    });
  });
};
