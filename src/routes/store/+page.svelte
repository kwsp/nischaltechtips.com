<script>
	import ProductList from './components/ProductList.svelte';
	import NTT from '../../components/NTT.svelte';

	import jinx_7 from '$lib/images/jinx/jinx_7.webp';
	import jinx_11 from '$lib/images/jinx/jinx_11.webp';
</script>

<svelte:head>
	<title>Nischal Tech Tips Store</title>
	<meta name="description" content="NTT Store" />
</svelte:head>

<section>
	<h1>
		<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" class="jinxRoll" target="_blank">
			<img src={jinx_11} width="70" alt="Jinx jinx" loading="lazy" />
		</a>
		<NTT /> STORE
		<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" class="jinxRoll" target="_blank">
			<img src={jinx_7} width="100" alt="Jinx jinx" loading="lazy" />
		</a>
	</h1>

	<ProductList />
</section>

<style>
	h1 {
		align-items: center;
		text-align: center;
		vertical-align: center;
		justify-content: center;
	}
	@media (max-width: 767px) {
		.jinxRoll {
			display: none;
		}
	}
</style>
