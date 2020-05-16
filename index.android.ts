import {device} form "platform"; 

export function getUUID() {
    return device.uuid;
}
