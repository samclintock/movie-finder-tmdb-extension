<script lang="ts">
	import Search from "./components/Search.svelte";
    import Movie from "./components/media/Movie.svelte";
    import TV from "./components/media/TV.svelte";
    import Person from "./components/media/Person.svelte";

	import type * as tmdbTypes from "../../common/types/api/tmdb";

	export let name: string;

	let config: tmdbTypes.Config;
    let media: Partial<tmdbTypes.Media>;
</script>

<main id="canvas">
	<h1>{name}</h1>

	<Search bind:media={media} bind:config={config} />

	{#if media}
		<section id="media">
			{#if media.movie}
				<Movie movie={media.movie} config={config} />
			{/if}

			{#if media.tvShow}
				<TV tvShow={media.tvShow} config={config} />
			{/if}

			{#if media.person}
				<Person person={media.person} config={config} />
			{/if}
		</section>
	{/if}

	<p><small>Powered by <a href="https://www.themoviedb.org/" target="_blank">TMDB</a></small></p>
</main>

<style>
	#canvas {
		width: 500px;
		padding: 10px;
	}

	#media {
		margin-top: 20px;
	}
</style>