"use strict";
var utils_1 = require("utils/utils");
function getUUID() {
    var mainBundle = NSBundle.mainBundle;
    var appName = mainBundle.infoDictionary.objectForKey(kCFBundleNameKey);
    var strApplicationUUID = SAMKeychain.passwordForServiceAccount(appName, "incoding");
    if (!strApplicationUUID) {
        var currentDevice = UIDevice.currentDevice;
        strApplicationUUID = currentDevice.identifierForVendor.UUIDString;
        SAMKeychain.setPasswordForServiceAccount(strApplicationUUID, appName, "incoding");
    }
    return strApplicationUUID;
}
exports.getUUID = getUUID;
