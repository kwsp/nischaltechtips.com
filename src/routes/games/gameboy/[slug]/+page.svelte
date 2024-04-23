<script>
	/** @type {import('./$types').PageData} */
	import GameboyEmu from '../../components/GameboyEmu.svelte';

	export let data;
</script>

<svelte:head>
	<title>{data.game.title}</title>
	<meta name="description" content="NTT GameBoy: ${data.game.title}" />
</svelte:head>

<GameboyEmu romURL={data.game.romURL} />
