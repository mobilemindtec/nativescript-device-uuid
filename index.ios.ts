
declare let SAMKeychain:any;
declare let kCFBundleNameKey:any;

export function getUUID() {
    let mainBundle = NSBundle.mainBundle;
    let appName = mainBundle.infoDictionary.objectForKey(kCFBundleNameKey);
    var strApplicationUUID = SAMKeychain.passwordForServiceAccount(appName, "incoding");
    if (!strApplicationUUID) {
        let currentDevice = UIDevice.currentDevice;
        strApplicationUUID = currentDevice.identifierForVendor.UUIDString;
        SAMKeychain.setPasswordForServiceAccount(strApplicationUUID, appName, "incoding");
    }

    return strApplicationUUID;
}
