"use strict";
var platform = require("platform");
function getUUID() {
    return platform.Device.uuid;
}
exports.getUUID = getUUID;
