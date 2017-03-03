"use strict";
var platform_1 = require("platform");
function getUUID() {
    return platform_1.platform.Device.uuid;
}
exports.getUUID = getUUID;
