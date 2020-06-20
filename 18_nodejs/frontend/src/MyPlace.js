import { Map } from "./ui/Map";

class LoadedPlace {
  constructor(address, coordinates) {
    new Map(coordinates);
    const headerTitle = document.querySelector("header h1");
    headerTitle.textContent = address;
  }
}

const url = new URL(location.href);
const queryParams = url.searchParams;
const locId = queryParams.get("location");
fetch("http://localhost:3000/location/" + locId)
  .then((response) => {
    if (response.status === 404) {
      throw new Error("Could not find location!");
    }
    return response.json();
  })
  .then((data) => {
    new LoadedPlace(data.address, data.coordinates);
  })
  .catch((err) => {
    alert(err.message);
  });
