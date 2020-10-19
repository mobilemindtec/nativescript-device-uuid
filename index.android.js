"use strict";
var platform = require("@nativescript/core/platform");
function getUUID() {
    return platform.Device.uuid;
}
exports.getUUID = getUUID;
