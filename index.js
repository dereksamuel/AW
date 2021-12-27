const $scene = document.querySelector("a-scene");
const $content = document.querySelector(".content");

window.objective = {
  lat: 4.578540040534844,
  lon: -74.12260975377717
};

function initialize() {
  getLocation();
}

function getLocation() {
  const options = { frequency: 60, referenceFrame: 'device' };
  const sensor = new AbsoluteOrientationSensor(options);

  sensor.addEventListener('reading', () => {
    // model is a Three.js object instantiated elsewhere.
    model.quaternion.fromArray(sensor.quaternion).inverse();
  });
  sensor.addEventListener('error', error => {
    if (event.error.name == 'NotReadableError') {
      console.log("Sensor is not available.");
    }
  });
  sensor.start();
}

window.onload = initialize();
