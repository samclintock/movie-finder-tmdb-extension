<script lang="ts">
    import type * as tmdbTypes from "../../../../common/types/api/tmdb";
    import MediaImage from "./MediaImage.svelte";

    export let person: tmdbTypes.Person;
    export let config: tmdbTypes.Config;
</script>

<MediaImage mediaImageOptions={{
    name: person.name,
    config: {
        baseUrl: config?.images?.secure_base_url,
        posterSizes: config?.images?.poster_sizes,
        profileSizes: config?.images?.profile_sizes
    },
    imageType: "media",
    mediaType: "person",
    profilePath: person.profile_path
}} />

<h2>{person.name}</h2>

{#if person.biography}
    <p>{person.biography}</p>
{/if}