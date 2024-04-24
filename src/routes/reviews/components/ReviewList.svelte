<script>
	import ToggleConfetti from '../../../components/ToggleConfetti.svelte';
	import Confetti from 'svelte-confetti';

	const reviews = [
		{
			id: 1,
			product: 'AMD 7800x4D CPU',
			title: 'This CPU Teleported My Cat',
			review:
				"I installed the AMD 7800x3D CPU last weekend, and let me tell you, it's not just fast; it's light-speed! My cat, Jinx, was lounging on the keyboard, and when I booted up a game, she vanished into thin air, only to reappear in the neighbor's fridge, mildly annoyed but chilly. If you want a processor that not only boosts your frame rates but also dabbles in quantum physics, this is the one for you. Just make sure your pets are at a safe distance unless you want them exploring parallel universes."
		},
		{
			id: 2,
			product: 'UltraGigaMax Gaming Chair',
			title: 'A Chair So Comfortable, It Created a Black Hole',
			review:
				"The moment I sat in the UltraGigaMax Gaming Chair, I knew my life had changed. It cradled me so gently I thought I'd become one with the universe. I was wrong. I became the universe. As I reclined, the fabric of reality itself began to warp around me, creating a black hole in my living room. My snacks now orbit me as I game, and I haven't stood up in weeks. Who needs gravity when you have the ultimate gaming chair? Disclaimer: Might cause mild disruptions in the space-time continuum. Snack retrieval becomes significantly harder."
		},
		{
			id: 3,
			product: 'QuantumLeap SSD',
			title: 'This SSD is So Fast, It Finished My Work Before I Started',
			review:
				"I installed the QuantumLeap SSD yesterday, and I'm pretty sure it's defying the laws of time and space. I thought about starting my project, and boom, it was already done. Files load before I even think about them, and I'm pretty sure it sent me an email from the future warning me about a coffee spill. If you're tired of waiting for files to load or just want to live in a world where your digital life is one step ahead, the QuantumLeap SSD might just tear a hole in the fabric of reality to get you there. Just watch out for those future emails; not all spoilers are welcome."
		},
		{
			id: 4,
			product: 'PhotonBeam Mouse',
			title: 'A Mouse So Responsive, It Clicks in the Future',
			review:
				"Ever thought about clicking something and found it's already been clicked? Welcome to the reality of using the PhotonBeam Mouse. It's so responsive, I swear it anticipates my moves. Last Tuesday, I considered buying concert tickets, and next thing I know, the tickets are bought, and my calendar is updated. It's like having a personal assistant from the future, minus the awkward conversations about flying cars and why we still don't have them."
		},
		{
			id: 5,
			product: 'NebulaWiFi Router',
			title: "Wi-Fi So Fast, It Streams Tomorrow's Shows",
			review:
				"The NebulaWiFi Router promised unparalleled speeds, but I wasn't expecting it to bend the rules of time. I started streaming my favorite show, and suddenly I'm watching episodes that haven't even been released yet. The router's so ahead of its time, I've already seen the finale of series that are still being written. The only downside? Trying to avoid spoilers for shows that the rest of the world won't see for months. If you're tired of buffering and ready for a router that offers a glimpse into the future, this is it. Just be prepared for a lot of 'Wait, what do you mean you've already seen it?' from your friends."
		},
		{
			id: 6,
			product: 'Echoless Sound Cancelling Headphones',
			title: 'Headphones So Quiet, They Silence Existential Dread',
			review:
				"In search of peace and quiet, I stumbled upon the Echoless Sound Cancelling Headphones. Little did I know, they'd cancel more than just noise. The moment I put them on, not only did the world's chatter fade away, but so did my swirling thoughts of existential dread. Now, I sit in blissful silence, pondering the void without the pesky interference of external sound or internal panic. These headphones don't just block out noise; they create a vacuum of serenity. Side effects may include forgetting your own name or why you walked into the room, but in such quiet, who really cares?"
		},
		{
			id: 7,
			product: 'GalacticProjector Keyboard',
			title: 'A Keyboard That Types Your Thoughts',
			review:
				"I thought I'd seen it all until the GalacticProjector Keyboard entered my life. It doesn't just type; it projects my thoughts directly onto the screen. At first, it was amazing. Essays wrote themselves, emails sent without lifting a finger. But then, it started typing out thoughts I hadn't even fully formed yet. It's like it knew what I was going to think before I thought it. Now, I'm having conversations with my future self, who's surprisingly critical of my past decisions. If you're ready for a keyboard that's more in tune with you than you are, brace yourself. It's a wild ride through the psyche with the occasional pit stop in existential contemplation."
		}
	];
</script>

<div class="reviews-list">
	<hr />
	<ToggleConfetti>
		<button slot="label">
			<span style="font-size: large;">LATEST TECH REVIEWS!</span>
		</button>

		<Confetti />
	</ToggleConfetti>

	<hr />
	{#each reviews as review}
		<!-- <a href={`/review/${review.id}`}>
		<h2>
			<span class="review-title-product"><strong>{review.product}</strong></span>:
			<span class="review-title"><i>{review.title}</i></span>
		</h2>
		<p>{review.review}</p>
		</a> -->

		<ToggleConfetti>
			<button slot="label">
				<h2>
					<span class="review-title-product"><strong>{review.product}</strong></span>:
					<span class="review-title"><i>{review.title}</i></span>
				</h2>
				<p>{review.review}</p>
			</button>

			<Confetti y={[0.25, 0.5]} x={[-4, 4]} />
		</ToggleConfetti>

		<hr />
	{/each}
</div>

<style>
	button {
		all: unset;
	}

	.reviews-list .review-title-product {
		color: var(--color-theme-2);
		font-size: large;
	}
	.reviews-list .review-title {
		color: var(--color-text);
		font-size: large;
	}

	.reviews-list p {
		color: var(--color-text);
	}
</style>
