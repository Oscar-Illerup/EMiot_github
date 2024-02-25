var heatbeat_interval = [30,60,120,240,360,480,600,720];
var confirmed_heatbeat = [true, false];
var ble_scanner = ["on", "off"];
var ble_prefix_1 = ["ac233f","oc0001","oc0002","oc0003"];
var ble_prefix_2 = ["ac233f","oc0001","oc0002","oc0003"];
var ble_prefix_3 = ["ac233f","oc0001","oc0002","oc0003"];

function encodeDownlink(input) {
  return {
    bytes: [
    heatbeat_interval.indexOf(input.data.heatbeat_interval),
    confirmed_heatbeat.indexOf(input.data.confirmed_heatbeat),
    ble_scanner.indexOf(input.data.ble_scanner),
    ble_prefix_1.indexOf(input.data.ble_prefix_1),
    ble_prefix_2.indexOf(input.data.ble_prefix_2),
    ble_prefix_3.indexOf(input.data.ble_prefix_3)
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
        confirmed_heatbeat: confirmed_heatbeat[input.bytes[1]],
        ble_scanner: ble_scanner[input.bytes[2]],
        ble_prefix_1: ble_prefix_1[input.bytes[3]],
        ble_prefix_2: ble_prefix_1[input.bytes[4]],
        ble_prefix_3: ble_prefix_1[input.bytes[5]]
      }
    }
  default:
    return {
      errors: ["unknown FPort"]
    }
  }
}