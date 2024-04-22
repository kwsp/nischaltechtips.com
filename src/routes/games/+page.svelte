<script>
	import NTT from '../../components/NTT.svelte';
	import Pong from './components/pong.svelte';
	import jinx_judge from '$lib/images/jinx/jinx_judge.webp';
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

	<Pong width={600} height={450} />
</section>

<style>
	.container {
		display: flex;
		justify-content: center;
	}
</style>
