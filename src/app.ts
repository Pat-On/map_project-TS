import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";

const form = document.querySelector("form")!;
const lngInput = document.getElementById("lng")! as HTMLInputElement;
const latInput = document.getElementById("lat")! as HTMLInputElement;

function searchAddressHandler(event: Event) {
  event.preventDefault();

  //   const coordinates = {lat: 40.41, lng: -73.99}; // Can't fetch coordinates from Google API, use dummy ones
  const lngAddress = lngInput.value;
  const latAddress = latInput.value;

  document.getElementById("map")!.innerHTML = ""; // clear <p> from <div id="map">
  new Map({
    target: "map",
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
    ],
    view: new View({
      center: fromLonLat([+lngAddress, +latAddress]),
      zoom: 16,
    }),
  });
}

form.addEventListener("submit", searchAddressHandler);

document.getElementById("map")!.innerHTML = ""; // clear <p> from <div id="map">
new Map({
  target: "map",
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
  ],
  view: new View({
    center: fromLonLat([-1.89983, 52.48142]),
    zoom: 16,
  }),
});
