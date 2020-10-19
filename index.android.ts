import {Device} from "@nativescript/core/platform"; 

export function getUUID() {
    return Device.uuid;
}
