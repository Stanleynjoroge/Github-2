var map = L.map("map", {
  attributionControl: false, // added later below
  center: [40, 0],
  zoom: 3
});

var positron = L.tileLayer(
  "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
  {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attribution">CARTO</a>'
  }
).addTo(map);

const options = {
  key: "oc_gs_codependemo74gzf48ew7fdvs91nba",
  position: "topright"
};

var geosearchControl = L.Control.openCageGeosearch(options).addTo(map);

L.control.attribution({ prefix: false }).addTo(map);