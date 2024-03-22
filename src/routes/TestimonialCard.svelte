<script>
	export let imageSrc = '';
	export let testimonial = '';
	export let customerName = '';
	export let customerTitle = '';

	import ImageClickLarge from './ImageClickLarge.svelte';

	let isOverlayVisible = false;
	function toggleOverlay() {
		isOverlayVisible = !isOverlayVisible;
	}
</script>

<div class="testimonial-card">
	<!-- <img class="testimonial-image" src={imageSrc} alt={`Photo of ${customerName}`} /> -->
	{#if isOverlayVisible}
		<button class="overlay" on:click={toggleOverlay}>
			<img src={imageSrc} alt={`Enlarged photo of ${customerName}`} class="enlarged-image" />
		</button>
	{/if}
	<button on:click={toggleOverlay}>
		<img class="testimonial-image" src={imageSrc} alt={`photo of ${customerName}`} />
	</button>

	<div class="testimonial-content">
		<blockquote class="testimonial-text">{testimonial}</blockquote>
		<p class="customer-name">{customerName}</p>
		<p class="customer-title">{customerTitle}</p>
	</div>
</div>

<style>
	.testimonial-card {
		display: flex;
		align-items: center;
		background-color: #2a2a2a; /* Dark background */
		color: #fff; /* Light text */
		padding: 20px;
		border-radius: 10px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); /* More pronounced shadow */
		text-align: left;
		margin: 20px;
		gap: 20px;
	}

	button {
		all: unset;
	}

	.testimonial-image {
		width: 140px; /* Increased size */
		height: 140px; /* Increased size */
		border-radius: 50%;
		object-fit: cover;
		flex-shrink: 0;
		border: 3px solid #007bff;
	}

	.testimonial-content {
		max-width: calc(100% - 140px);
	}

	.testimonial-text {
		font-style: italic;
		color: #cccccc; /* Lighter gray for the text */
		margin: 0 0 10px;
	}

	.customer-name {
		font-weight: bold;
		color: #ffffff; /* Keep names bright for emphasis */
		margin: 0;
	}

	.customer-title {
		font-size: 0.85rem;
		color: #aaaaaa; /* Slightly dimmed for less emphasis */
		margin: 0;
	}

	.customer-name,
	.testimonial-text,
	.customer-title {
		font-size: clamp(0.85rem, 2vw, 1rem);
	}

	@media (max-width: 768px) {
		.testimonial-card {
			flex-direction: column;
			align-items: center;
			text-align: center;
		}

		.testimonial-image {
			width: 140px; /* Slightly smaller on smaller screens */
			height: 140px;
		}

		.testimonial-content {
			max-width: 100%;
		}
	}

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
