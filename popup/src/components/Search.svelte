<script lang="ts">
    import type * as tmdbTypes from "../../../common/types/api/tmdb";
    import { sendMessage } from "../utils/messaging";
    import MediaImage from "./media/MediaImage.svelte";

    export let media: Partial<tmdbTypes.Media>;
    export let config: tmdbTypes.Config;

    let searchQuery: string = "";
    let search: tmdbTypes.Search;

    const searchMedia = async (): Promise<void> => {
        search = undefined;
        media = undefined;

        if (searchQuery) {
            if (!config) {
                config = await sendMessage("Config");
            }

            search = await sendMessage("Search", searchQuery);
        }
    }

    const getMedia = (mediaId: number, mediaType: tmdbTypes.MediaType): 
        svelte.JSX.MouseEventHandler<HTMLAnchorElement> => {
        media = undefined;

        switch (mediaType) {
            case "movie":
                sendMessage("Movie", mediaId)
                    .then((value: tmdbTypes.Movie) => media = { movie: value });
                break;
            case "tv":
                sendMessage("TV", mediaId)
                    .then((value: tmdbTypes.TVShow) => media = { tvShow: value });
                break;
            case "person":
                sendMessage("Person", mediaId)
                    .then((value: tmdbTypes.Person) => media = { person: value });
                break;
        }

        return;
    }

    const getMediaName = (result: tmdbTypes.SearchResult): string => {
        switch (result.media_type) {
            case "movie":
                return result.title;
            case "tv":
            case "person":
                return result.name;
            default:
                return "";
        }
    }
</script>

<section id="search">
    <form on:submit|preventDefault={searchMedia}>
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Search for a movie, TV show or person"
          bind:value={searchQuery}
        />
        <button type="submit">Search</button>
    </form>
</section>

{#if search}
    <section id="search-results">
        {#if search.results?.length > 0}
            <table>
                <tr>
                    {#each search.results as result}
                        <td>
                            <a href={undefined} on:click|preventDefault={getMedia(result.id, result.media_type)}>
                                <MediaImage mediaImageOptions={{
                                    name: getMediaName(result),
                                    config: {
                                        baseUrl: config?.images?.secure_base_url,
                                        posterSizes: config?.images?.poster_sizes,
                                        profileSizes: config?.images?.profile_sizes
                                    },
                                    imageType: "search",
                                    mediaType: result.media_type,
                                    posterPath: result.poster_path,
                                    profilePath: result.profile_path,
                                }} />
                            </a>

                            <a href={undefined} on:click|preventDefault={getMedia(result.id, result.media_type)}>{getMediaName(result)}</a> <em>({result.media_type})</em>
                        </td>
                    {/each}
                </tr>
            </table>
        {:else}
            <small><em>No results found</em></small>
        {/if}
    </section>
{/if}

<style>
    #search input {
        width: 400px;
    }

    #search-results {
        border: 1px solid #333;
        margin-top: 20px;
        overflow-x: scroll;
        padding: 10px;
        width: 480px;
    }

    #search-results table tr td {
        vertical-align: top;
    }
</style>