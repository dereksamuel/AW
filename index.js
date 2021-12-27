const $scene = document.querySelector("a-scene");
const $content = document.querySelector(".content");
const earthRadius = 6.371;// in km

window.objective = {
  lat: 4.579830355454221,
  lon: -74.12097647667673
};

function initialize() {
  const timer = setInterval(() => {
    getLocation();
  }, 100);
  // 1 = 111111 m
}

function getLocation() {
  navigator.geolocation.getCurrentPosition((position) => {
    window.myLocation = {
      lat: position.coords.latitude,
      lon: position.coords.longitude,
    };

    const totalDistance = measure(
      window.myLocation.lat,
      window.myLocation.lon,
      window.objective.lat,
      window.objective.lon
    );

    // const zObject3D = myLocation.lat > objective.lat ? myLocation.lat - objective.lat : objective.lat - myLocation.lat;
    // const xObject3D = myLocation.lon > objective.lon ? myLocation.lon - objective.lon : objective.lon - myLocation.lon;

    // Create a new 3d object
    // const $aBox = document.createElement("a-box");

    // $aBox.setAttribute("position", `${objective.lon} 0 ${objective.lat}`);
    // $aBox.setAttribute("color", "#4CC3D9");

    // $scene.appendChild($aBox);
    $content.innerHTML = `
      <p>Lat: ${totalDistance}</p>
      <p>Lon: ${totalDistance}</p>
    `;
  }, console.error);
}

function measure(lat1, lon1, lat2, lon2){ //
  var R = 6378.137;
  var dLat = lat2 * Math.PI / 180 - lat1 * Math.PI / 180;
  var dLon = lon2 * Math.PI / 180 - lon1 * Math.PI / 180;
  var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon/2) * Math.sin(dLon/2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var d = R * c;
  return d * 1000;// meters
}

window.onload = initialize();
