const $scene = document.querySelector("a-scene");
const earthMeridian = 111111.11111111111; // in meters
const earthRadius = 6.371;// in km

// Math.PI * earthRadius * (4.580844580492296 / 180)
window.objective = {
  lat: 4.579568831770866,
  lon: -74.12089832800635
};

function initialize() {
  // const timer = setInterval(() => {
    getLocation();
  // }, 100);
  // 1 = 111111 m
}

function getLocation() {
  navigator.geolocation.getCurrentPosition((position) => {
    window.myLocation = {
      lat: position.coords.latitude,
      lon: position.coords.longitude,
    };

    // const zObject3D = myLocation.lat > objective.lat ? myLocation.lat - objective.lat : objective.lat - myLocation.lat;
    // const xObject3D = myLocation.lon > objective.lon ? myLocation.lon - objective.lon : objective.lon - myLocation.lon;

    // Create a new 3d object
    const $aBox = document.createElement("a-box");

    $aBox.setAttribute("position", `${objective.lon} 0 ${objective.lat}`);
    $aBox.setAttribute("color", "#4CC3D9");

    $scene.appendChild($aBox);
  }, console.error);
}

window.onload = initialize();
