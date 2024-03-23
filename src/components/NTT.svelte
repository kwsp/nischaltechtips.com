<script>
	import { Confetti } from 'svelte-confetti';

	import ToggleConfetti from './ToggleConfetti.svelte';
</script>

<ToggleConfetti>
	<button slot="label">
		<span class="ntt-emphasis">Nischal Tech Tips</span>
	</button>

	<!-- <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
	<span class="ntt-emphasis">Nischal Tech Tips</span>
	</a> -->

	<Confetti colorArray={[`hsl(${Math.floor(Math.random() * 360)}, 75%, 50%)`]} />
</ToggleConfetti>

<style>
	button {
		all: unset;
	}

	.ntt-emphasis {
		font-weight: 700;
		color: var(--color-emphasis);
	}
</style>
