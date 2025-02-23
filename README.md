# What is Movie Finder?

Movie Finder is an open-source browser extension for Chrome. Powered by the TMDB _(The Movie Database)_ API, Movie Finder helps you search for your favourite movies, TV shows and actors.

# Languages and Frameworks

Movie Finder is a [Manifest V3](https://developer.chrome.com/docs/extensions/mv3/intro/) Chrome extension built using [TypeScript](https://www.typescriptlang.org/), [Webpack](https://webpack.js.org) and [Svelte](https://svelte.dev/).

# How to Run Locally

## .env file

1. Movie Finder uses version 3 of the TMDB API to retrieve metadata on movies, TV shows and actors. To be able to query the API you will need a **bearer token**. Instructions on how to do this can be found at [https://developers.themoviedb.org/3/getting-started/authentication#bearer-token](https://developers.themoviedb.org/3/getting-started/authentication#bearer-token).

2. Create a new `.env` file within `./service-worker` containing:

```
TMDB_API_AUTH_TOKEN="YOUR_BEARER_TOKEN"
```

**Please note:** The `.env` file has been added to `.gitignore` to be ignored in commits.

## Build the Extension

1. Within a terminal, run `cd ./movie-finder-tmdb-extension` so you are within the extension directory
2. Run `make install` to install the dependencies
3. Run `make build` to build the extension

## Install the Unpacked Extension

You should now be able to see the directory `./dist` that was created when you ran `make`.

1. Within Chrome, navigate to `chrome://extensions/` and in the top right, enable **Developer mode**.
3. On the top left, click **Load unpacked** and select `./movie-finder-tmdb-extension/dist`.

Movie Finder should now be installed!
