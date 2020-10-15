import {device} form "platform"; 

export function getUUID() {
    return platform.Device.uuid;
}
