import * as tmdbTypes from "../../../common/types/api/tmdb";
import * as utilTypes from "../../../common/types/utils";

import { Tmdb } from "../api/tmdb";
import { isMoreThanOneWeekAgo } from "./date";
import { ChromeStorage } from "./chrome-storage";

const CONFIGURATION_KEY = "configuration";

export class Config {
    private _chromeStorage: ChromeStorage;
    private _tmdb: Tmdb;

    constructor(chromeStorage: ChromeStorage, tmdb: Tmdb) {
        this._chromeStorage = chromeStorage;
        this._tmdb = tmdb;
    }

    public get = async (): Promise<tmdbTypes.Config | undefined> => {
        // Retrieve the config from cache
        const cache = await this._chromeStorage.get<utilTypes.Cache<tmdbTypes.Config>>(
            CONFIGURATION_KEY);
    
        // Determine if the cache is more than a week old
        if (cache && !isMoreThanOneWeekAgo(cache.date)) {
            console.log("Retrieved the configration from cache.");
            return cache.item;
        }

        console.log("Retrieving the configration from the API.");

        // Retrieve a new config from TMDB
        const config = await this._tmdb.config();

        // Store the new config in cache
        if (config) {
            console.log("Stored the configuration in cache.");
            await this._chromeStorage.set<utilTypes.Cache<tmdbTypes.Config>>(
                CONFIGURATION_KEY, { date: Date.now(), item: config });
        }
    
        return config;
    }
}