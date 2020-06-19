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
const coords = {
  lat: +queryParams.get("lat"),
  lng: +queryParams.get("lng"),
};
const address = queryParams.get("address");
new LoadedPlace(address, coords);
