<script>
	import MediaQuery from '../../components/MediaQuery.svelte';
	import NTT from '../../components/NTT.svelte';
	import Cartridge from '../../components/Cartridge.svelte';
	import Pong from './components/Pong.svelte';

	import jinx_judge from '$lib/images/jinx/jinx_judge.webp';

	const gameboyGames = [
		{
			title: "Link's Awakening (GameBoy)",
			url: '/games/gameboy/links_awakening',
			cartridgeColor: 'green'
		},
		{
			title: 'Pokemon Blue (GameBoy)',
			url: '/games/gameboy/pokemon_blue',
			cartridgeColor: 'blue'
		}
	];
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
			<img src={jinx_judge} width="200" alt="Cat judge" loading="lazy" />
		</a>
	</div>

	<ul>
		{#each gameboyGames as gameboyGame}
			<li>
				<a href={gameboyGame.url}>
					<strong>{gameboyGame.title}</strong>
					<Cartridge color={gameboyGame.cartridgeColor} changeColor={false} />
				</a>
			</li>
		{/each}
	</ul>

	<p>Play pong while you're here!</p>
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
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	h1 {
		margin-top: 0;
		margin-bottom: 0;
	}

	.container {
		display: flex;
		justify-content: center;
	}

	ul {
		list-style-type: none;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
	}
	ul a {
		margin: 1rem;
		justify-content: center;
		align-items: center;
	}

	@media (max-width: 768px) {
		ul {
			flex-direction: column;
		}
	}
</style>
