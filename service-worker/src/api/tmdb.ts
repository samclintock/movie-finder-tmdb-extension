import * as tmdbTypes from "../../../common/types/api/tmdb";

export class Tmdb {
    private API_HOST_NAME = "https://api.themoviedb.org";
    private API_VERSION = 3;
    private API_METHOD_GET = "GET";
    private API_HEADER_APPLICATION_JSON = "application/json";
    private API_AUTH_BEARER = "Bearer";
    private API_AUTH_TOKEN = process.env.TMDB_API_AUTH_TOKEN;

    /**
     * Search for a movie, TV show or person using the TMDB API.
     *
     * @param {string} query The search query to use.
     * @return {Promise<tmdbTypes.Search | undefined>} The search results.
     */
    public search = async (query: string): Promise<tmdbTypes.Search | undefined> => {
        if (!(query?.length > 0)) {
            console.error("A query is required to search for a movie, TV show or person.");
            return undefined;
        }
        
        const queryString = new URLSearchParams({ query: query }).toString();

        return this.get<tmdbTypes.Search>(
            `${this.API_HOST_NAME}/${this.API_VERSION}/search/multi?${queryString}`);
    }

    /***
     * Fetch the watch providers for a movie or TV show using the TMDB API.
     * 
     * @param {string} mediaId The ID of the movie or TV show.
     * @param {tmdbTypes.WatchProviderType} watchProviderType The provider type.
     * @return {Promise<tmdbTypes.WatchProviders | undefined>} The watch providers.
     */
    public watchProviders = async (
        mediaId: number, watchProviderType: tmdbTypes.WatchProviderType):
        Promise<tmdbTypes.WatchProviders | undefined> => {
        if (!(mediaId > 0)) {
            console.error("A media id is required to fetch the watch providers.");
            return undefined;
        }

        return this.get<tmdbTypes.WatchProviders>(
            `${this.API_HOST_NAME}/${this.API_VERSION}/${watchProviderType}/${mediaId}/watch/providers`);
    }

    /**
     * Fetch a person.
     *
     * @param {number} personId The ID of the person.
     * @return {Promise<tmdbTypes.Person | undefined>} The person.
     */
    public person = async (personId: number): Promise<tmdbTypes.Person | undefined> => {
        if (!(personId > 0)) {
            console.error("A person id is required to fetch a person.");
            return undefined;
        }

        return this.get<tmdbTypes.Person>(
            `${this.API_HOST_NAME}/${this.API_VERSION}/person/${personId}`);
    }

    /**
     * Fetch a TV show.
     *
     * @param {number} tvShowId The ID of the tv show.
     * @return {Promise<tmdbTypes.TVShow | undefined>} The TV show.
     */
    public tvShow = async (tvShowId: number): Promise<tmdbTypes.TVShow | undefined> => {
        if (!(tvShowId > 0)) {
            console.error("A tv show id is required to fetch a tv show.");
            return undefined;
        }

        return this.get<tmdbTypes.TVShow>(
            `${this.API_HOST_NAME}/${this.API_VERSION}/tv/${tvShowId}`);
    }

    /**
     * Fetch a movie.
     *
     * @param {number} movieId The ID of the movie.
     * @return {Promise<tmdbTypes.Movie | undefined>} The movie.
     */
    public movie = async (movieId: number): Promise<tmdbTypes.Movie | undefined> => {
        if (!(movieId > 0)) {
            console.error("A movie id is required to fetch a movie.");
            return undefined;
        }

        return this.get<tmdbTypes.Movie>(
            `${this.API_HOST_NAME}/${this.API_VERSION}/movie/${movieId}`);
    }
    
    /**
     * Fetch the configuration.
     * 
     * @return {Promise<tmdbTypes.Config | undefined>} The configuration.
     */
    public config = async (): Promise<tmdbTypes.Config | undefined> => 
        this.get<tmdbTypes.Config>(
            `${this.API_HOST_NAME}/${this.API_VERSION}/configuration`);

    /**
     * Perform an API GET request with authorization.
     *
     * @param {string} url The url to use for the API GET request.
     * @return {Promise<T | undefined>} The response of the API GET request.
     */
    private get = async <T>(url: string) : Promise<T | undefined> => {
        if (!(url?.length > 0)) {
            console.error("A url is required to perform an API GET request.");
            return undefined;
        }

        try {
            const response = await fetch(url,
                {
                    method: this.API_METHOD_GET,
                    headers: {
                        authorization: `${this.API_AUTH_BEARER} ${this.API_AUTH_TOKEN}`,
                        accept: this.API_HEADER_APPLICATION_JSON,
                    },
                });
            
            if (!response.ok) {
                throw new Error(`${response.status}`);
            }

            return (await response.json() as T);
        } catch (e) {
            console.error(`Error for API GET request (${url})": ${e}`);
            return undefined;
        }
    }
}