# What is MovieMoose?

MovieMoose is an open-source extension for [Chrome](https://www.google.com/chrome/). Find out more about your favourite movies, TV shows and actors whilst streaming on Netflix, Disney+ and Amazon Prime Video, or wherever and whenever you want! MovieMoose is powered by the [TMDB](https://www.themoviedb.org/) API.

# Languages and Frameworks

MovieMoose is a [Manifest V3](https://developer.chrome.com/docs/extensions/mv3/intro/) Chrome extension built using [TypeScript](https://www.typescriptlang.org/) and [Svelte](https://svelte.dev/).

# How to Run Locally

## .env file

1. MovieMoose uses version 3 of the TMDB API to retrieve metadata on movies, TV shows and actors. To be able to query the API you will need a **bearer token**. Instructions on how to do this can be found at [https://developers.themoviedb.org/3/getting-started/authentication#bearer-token](https://developers.themoviedb.org/3/getting-started/authentication#bearer-token).

2. Create a new `.env` file within `./service-worker` containing:

```
TMDB_API_AUTH_TOKEN="YOUR_BEARER_TOKEN"
```

**Please note:** The `.env` file has been added to `.gitignore` to be ignored in commits.

## Build the Extension

1. Within a terminal, run `cd ./movie-moose` so you are within the extension directory
2. Run `npm install` within `popup` and `service-worker` to install the dependencies
3. Run `make` to build the extension

## Install the Extension

You should now be able to see the directory `./dist` that was created when you ran `make`.

1. Within Chrome, navigate to `chrome://extensions/` and in the top right, enable **Developer mode**.
3. On the top left, click **Load unpacked** and select `./movie-moose/dist`.

MovieMoose should now be installed!
