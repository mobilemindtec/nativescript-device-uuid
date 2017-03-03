import { platform } from "platform"; 

export function getUUID() {
    return platform.Device.uuid;
}
