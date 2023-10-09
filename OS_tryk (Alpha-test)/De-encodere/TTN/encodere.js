var heatbeat_interval = [30,60,120,240,360,480,600,720];
var confirmed_heatbeat = [true, false];

function encodeDownlink(input) {
  return {
    bytes: [
    heatbeat_interval.indexOf(input.data.heatbeat_interval),
    confirmed_heatbeat.indexOf(input.data.confirmed_heatbeat)
    ],
    fPort: 10,
  };
}

function decodeDownlink(input) {
  switch (input.fPort) {
  case 10:
    return {
      data: {
        heatbeat_interval: heatbeat_interval[input.bytes[0]],
        confirmed_heatbeat: confirmed_heatbeat[input.bytes[1]]
      }
    }
  default:
    return {
      errors: ["unknown FPort"]
    }
  }
}