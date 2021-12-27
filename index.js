const $scene = document.querySelector("a-scene");
const $content = document.querySelector(".content");
const earthRadius = 6.371;// in km

window.objective = {
  lat: 4.579164687575145,
  lon: -74.1212180212868
};

function initialize() {
  getLocation();
  // 1 = 111111 m
}

function getLocation() {
  navigator.geolocation.watchPosition((position) => {
    window.myLocation = {
      lat: position.coords.latitude,
      lon: position.coords.longitude,
    };

    const totalDistance = "";

    // const zObject3D = myLocation.lat > objective.lat ? myLocation.lat - objective.lat : objective.lat - myLocation.lat;
    // const xObject3D = myLocation.lon > objective.lon ? myLocation.lon - objective.lon : objective.lon - myLocation.lon;

    // Create a new 3d object
    // const $aBox = document.createElement("a-box");

    // $aBox.setAttribute("position", `${objective.lon} 0 ${objective.lat}`);
    // $aBox.setAttribute("color", "#4CC3D9");

    // $scene.appendChild($aBox);
    $content.innerHTML = `
      <p>Lat: ${Math.hypot(myLocation.lat, objective.lat)}</p>
      <p>Lon: ${Math.hypot(myLocation.lon, objective.lon)}m</p>
    `;
  }, console.error);
}

window.onload = initialize();
