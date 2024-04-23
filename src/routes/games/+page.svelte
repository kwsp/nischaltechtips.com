<script>
	import MediaQuery from '../../components/MediaQuery.svelte';
	import NTT from '../../components/NTT.svelte';
	import jinx_judge from '$lib/images/jinx/jinx_judge.webp';

	import Pong from './components/pong.svelte';
</script>

<svelte:head>
	<title>NTT Games</title>
	<meta name="description" content="NTT Games" />
</svelte:head>

<section>
	<h1>
		<NTT /> GAMES
	</h1>

	<div class="container">
		<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
			<img src={jinx_judge} width="200" alt="Cat puter" loading="lazy" />
		</a>
	</div>

	<ul>
		<li><a href="/games/gameboy">Gameboy</a></li>
	</ul>

	<MediaQuery query="(max-width: 768px)" let:matches>
		{#if matches}
			<!-- mobile -->
			<Pong width={350} height={280} />
		{:else}
			<Pong width={600} height={450} />
		{/if}
	</MediaQuery>
</section>

<style>
	h1 {
		margin-top: 0;
		margin-bottom: 0;
	}

	.container {
		display: flex;
		justify-content: center;
	}
</style>
