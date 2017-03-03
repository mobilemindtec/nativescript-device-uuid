"use strict";
var platform = require("platform");
function getUUID() {
    return platform.device.uuid;
}
exports.getUUID = getUUID;
