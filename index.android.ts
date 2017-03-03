import platform = require("platform"); 

export function getUUID() {
    return platform.device.uuid;
}
