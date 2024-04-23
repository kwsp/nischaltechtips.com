<script>
	export let src = '';
	export let alt = '';
	export let className = '';

	let isOverlayVisible = false;
	function toggleOverlay() {
		isOverlayVisible = !isOverlayVisible;
	}

	export { className as class };
</script>

{#if isOverlayVisible}
	<button class="overlay" on:click={toggleOverlay}>
		<img {src} {alt} class="enlarged-image" />
	</button>
{/if}
<button on:click={toggleOverlay}>
	<img class={className} {src} {alt} />
</button>

<style>
	.overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background-color: rgba(0, 0, 0, 0.8); /* Semi-transparent background */
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 20; /* High z-index to ensure it's above all other content */
	}

	.enlarged-image {
		max-width: 80%; /* Limits the size of the enlarged image */
		max-height: 80vh; /* Adjusts based on the viewport height */
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); /* Optional: adds shadow for pop */
	}
</style>
