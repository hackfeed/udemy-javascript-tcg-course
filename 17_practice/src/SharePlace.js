import { Modal } from "./ui/Modal";
import { Map } from "./ui/Map";
import { getAddressFromCoords, getCoordsFromAddress } from "./utility/Location";

class PlaceFinder {
  constructor() {
    const addressForm = document.querySelector("form");
    const locateUserBtn = document.getElementById("locate-btn");
    this.shareBtn = document.getElementById("share-btn");

    locateUserBtn.addEventListener("click", this.locateUserHandler.bind(this));
    addressForm.addEventListener("submit", this.findAddressHandler.bind(this));
    this.shareBtn.addEventListener("click", this.sharePlaceHandler);
  }

  sharePlaceHandler() {
    const sharedLinkInputEl = document.getElementById("share-link");

    if (!navigator.clipboard) {
      sharedLinkInputEl.select();
      return;
    }

    navigator.clipboard
      .writeText(sharedLinkInputEl.value)
      .then(() => alert("Copied into clipboard!"))
      .catch((error) => {
        console.log(error);
        sharedLinkInputEl.select();
      });
  }

  selectPlace(coordinates, address) {
    if (this.map) {
      this.map.render(coordinates);
    } else {
      this.map = new Map(coordinates);
    }

    this.shareBtn.disabled = false;
    const sharedLinkInputEl = document.getElementById("share-link");
    sharedLinkInputEl.value = `${location.origin}/my-place?address=${encodeURI(address)}&lat=${
      coordinates.lat
    }&lng=${coordinates.lng}`;
  }

  locateUserHandler() {
    if (!navigator.geolocation) {
      alert(
        "Location feature is not available in your browser! Please enter your address manually!"
      );
      return;
    }

    const modal = new Modal("loading-modal-content", "Loading location, please wait!");
    modal.show();

    navigator.geolocation.getCurrentPosition(
      (successResult) => {
        modal.hide();
        const coordinates = {
          lat: successResult.coords.latitude,
          lng: successResult.coords.longitude,
        };
        const address = getAddressFromCoords(coordinates);
        this.selectPlace(coordinates, address);
      },
      (error) => {
        modal.hide();
        alert("Couldn't locate you! Please enter your address manually!");
        console.log(error);
      }
    );
  }

  findAddressHandler(event) {
    event.preventDefault();
    const address = event.target.querySelector("input").value.trim();
    if (!address) {
      alert("Invalid address");
      return;
    }

    const modal = new Modal("loading-modal-content", "Loading location, please wait!");
    modal.show();
    getCoordsFromAddress(address)
      .then((coordinates) => this.selectPlace(coordinates, address))
      .catch((error) => alert(error.message));
    modal.hide();
  }
}

new PlaceFinder();
