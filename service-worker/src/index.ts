import * as tmdbTypes from "../../common/types/api/tmdb";
import * as storageTypes from "../../common/types/utils/storage";
import { Tmdb } from "./api/tmdb";
import { ChromeStorage } from "./utils/chrome-storage";
import { Config } from "./utils/config";

const tmdb = new Tmdb();
const chromeStorageLocal = new ChromeStorage(storageTypes.StorageMechanism.Local);
const config = new Config(chromeStorageLocal, tmdb);

// TODO: Introduce type guards to the listener
chrome.runtime.onMessage.addListener((message, _sender, sendResponse): boolean => {
    switch (message.name) {
        case "Movie":
            tmdb.movie(message.data).then(
                (value: tmdbTypes.Movie | undefined) => sendResponse(value));
            return true;
        case "TV":
            tmdb.tvShow(message.data).then(
                (value: tmdbTypes.TVShow | undefined) => sendResponse(value));
            return true;
        case "Person":
            tmdb.person(message.data).then(
                (value: tmdbTypes.Person | undefined) => sendResponse(value));
            return true;
        case "Search":
            tmdb.search(message.data).then(
                (value: tmdbTypes.Search | undefined) => sendResponse(value));
            return true;
        case "Config":
            config.get().then(
                (value: tmdbTypes.Config | undefined) => sendResponse(value));
            return true;
        default:
            console.error("Unknown message sent to service worker.");
            return false;
    }
});