<script lang="ts">
    import type * as tmdbTypes from "../../../../common/types/api/tmdb";
    import MediaImage from "./MediaImage.svelte";

    export let movie: tmdbTypes.Movie;
    export let config: tmdbTypes.Config;

    let currencyLocale = Intl.NumberFormat("en-US");
</script>

{#if movie}
    <MediaImage mediaImageOptions={{
        name: movie.title,
        config: {
            baseUrl: config?.images?.secure_base_url,
            posterSizes: config?.images?.poster_sizes,
            profileSizes: config?.images?.profile_sizes
        },
        imageType: "media",
        mediaType: "movie",
        posterPath: movie.poster_path
    }} />

    <h2>{movie.title}</h2>

    {#if movie.genres}
        <p>{movie.genres.map((g) => g.name).join(", ")}</p>
    {/if}

    {#if movie.tagline}
        <small>{movie.tagline}</small>
    {/if}

    {#if movie.release_date}
        <p>Released on <strong>{movie.release_date}</strong></p>
    {/if}

    {#if movie.budget}
        <p>Budget of <strong>${currencyLocale.format(movie.budget)}</strong></p>
    {/if}

    {#if movie.overview}
        <p>{movie.overview}</p>
    {/if}
{:else}
    <small><em>Oops! Nothing to see here.</em></small>
{/if}