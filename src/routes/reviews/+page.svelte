<script>
	import ReviewList from './components/ReviewList.svelte';

	import NTT from '../../components/NTT.svelte';
	import jinx_12 from '$lib/images/jinx/jinx_12.webp';
</script>

<svelte:head>
	<title>NTT Reviews</title>
	<meta name="description" content="NTT Reviews" />
</svelte:head>

<section>
	<h1>
		<NTT /> REVIEWS
	</h1>
	<div class="container">
		<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
			<img src={jinx_12} width="150" alt="Cat puter" loading="lazy" />
		</a>
	</div>

	<ReviewList />
</section>

<style>
	h1 {
		margin-bottom: 0;
	}

	.container {
		display: flex;
		justify-content: center;
	}
</style>
