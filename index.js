const sensor = new AbsoluteOrientationSensor();
Promise.all([navigator.permissions.query({ name: "accelerometer" }),
        navigator.permissions.query({ name: "magnetometer" }),
        navigator.permissions.query({ name: "gyroscope" })])
  .then(results => {
    if (results.every(result => result.state === "granted")) {
      sensor.start();
      alert(sensor);
    } else {
      alert("No permissions to use AbsoluteOrientationSensor.");
    }
});

alert("Hello");
