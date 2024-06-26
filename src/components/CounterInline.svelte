<script lang="ts">
	import ToggleConfetti from './ToggleConfetti.svelte';
	import Confetti from 'svelte-confetti';

	import { spring } from 'svelte/motion';

	let count = 0;

	const displayed_count = spring();
	$: displayed_count.set(count);
	$: offset = modulo($displayed_count, 1);

	function modulo(n: number, m: number) {
		// handle negative numbers
		return ((n % m) + m) % m;
	}
</script>

<div class="counter">
	<ToggleConfetti>
		<button
			slot="label"
			class="counter-button"
			on:click={() => (count -= 1)}
			aria-label="Decrease the counter by one"
		>
			<svg aria-hidden="true" viewBox="0 0 1 1">
				<path d="M0,0.5 L1,0.5" />
			</svg>
		</button>

		<!-- Sparkle -->
		<Confetti
			y={[-0.5, 0.5]}
			x={[-0.5, 0.5]}
			colorRange={[30, 50]}
			amount={15}
			fallDistance="0px"
			duration={1500}
			size={3}
		/>
	</ToggleConfetti>

	<div class="counter-viewport">
		<div class="counter-digits" style="transform: translate(0, {100 * offset}%)">
			<strong class="hidden" aria-hidden="true">{Math.floor($displayed_count + 1)}</strong>
			<strong>{Math.floor($displayed_count)}</strong>
		</div>
	</div>

	<ToggleConfetti>
		<button
			slot="label"
			class="counter-button"
			on:click={() => (count += 1)}
			aria-label="Increase the counter by one"
		>
			<svg aria-hidden="true" viewBox="0 0 1 1">
				<path d="M0,0.5 L1,0.5 M0.5,0 L0.5,1" />
			</svg>
		</button>

		<!-- Sparkle -->
		<Confetti
			y={[-0.5, 0.5]}
			x={[-0.5, 0.5]}
			colorRange={[30, 50]}
			amount={15}
			fallDistance="0px"
			duration={1500}
			size={3}
		/>
	</ToggleConfetti>
</div>

<style>
	.counter {
		display: flex;
		margin: 0;
	}

	.counter-button {
		width: 1em;
		height: 100%;
		padding: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 0;
		background-color: transparent;
		touch-action: manipulation;
		font-size: 2rem;
	}

	.counter button:hover {
		background-color: var(--color-bg-1);
	}

	svg {
		width: 25%;
		height: 25%;
	}

	path {
		vector-effect: non-scaling-stroke;
		stroke-width: 2px;
		stroke: var(--color-red);
	}

	.counter-viewport {
		width: 1.5em;
		height: 1em;
		overflow: hidden;
		text-align: center;
		position: relative;
	}

	.counter-viewport strong {
		position: absolute;
		display: flex;
		width: 100%;
		height: 100%;
		font-weight: 400;
		color: var(--color-text);
		align-items: center;
		justify-content: center;
	}

	.counter-digits {
		position: absolute;
		width: 100%;
		height: 100%;
	}

	.hidden {
		top: -100%;
		user-select: none;
	}
</style>
