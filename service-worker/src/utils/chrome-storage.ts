import * as storageTypes from "../../../common/types/utils/storage";

export class ChromeStorage {
    private _storageMechanism: storageTypes.StorageMechanism;

    constructor(storageMechanism: storageTypes.StorageMechanism) {
        this._storageMechanism = storageMechanism;
    }

    public getChromeStorage = (): chrome.storage.StorageArea =>
        this._storageMechanism === storageTypes.StorageMechanism.Local ? 
            chrome.storage.local : chrome.storage.session;
    
    public get = async <T>(key: string): Promise<T | undefined> => 
        new Promise((resolve) => {
            this.getChromeStorage().get(
                key, (result: { [key: string]: any }) => {
                resolve(result[key] ?? undefined);
            });
        });

    public set = async <T>(key: string, value: T): Promise<void> => 
        new Promise((resolve) => {
            this.getChromeStorage().set({ [key]: value }, () => {
                resolve();
            });
        });
}