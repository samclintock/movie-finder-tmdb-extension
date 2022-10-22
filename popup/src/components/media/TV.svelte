<script lang="ts">
    import type * as tmdbTypes from "../../../../common/types/api/tmdb";
    import MediaImage from "./MediaImage.svelte";

    export let tvShow: tmdbTypes.TVShow;
    export let config: tmdbTypes.Config;
</script>

<MediaImage mediaImageOptions={{
    name: tvShow.name,
    config: {
        baseUrl: config?.images?.secure_base_url,
        posterSizes: config?.images?.poster_sizes,
        profileSizes: config?.images?.profile_sizes
    },
    imageType: "media",
    mediaType: "movie",
    posterPath: tvShow.poster_path
}} />

<h2>{tvShow.name}</h2>

{#if tvShow.overview}
    <p>{tvShow.overview}</p>
{/if}