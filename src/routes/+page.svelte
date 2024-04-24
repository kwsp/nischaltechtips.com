<script>
	import CounterInline from '../components/CounterInline.svelte';
	import NTT from '../components/NTT.svelte';
	import Testimonials from './Testimonials.svelte';
	import Laptop from '../components/laptop.svelte';
	import AshAndPikachu from '../components/AshAndPikachu.svelte';

	import cat_thumb_up from '$lib/images/cat_thumb_up_1.webp';
	import jinx_6 from '$lib/images/jinx/jinx_6.webp';
</script>

<svelte:head>
	<title>Nischal Tech Tips</title>
	<meta name="description" content="Nischal Tech Tips Home" />
</svelte:head>

<section>
	<div>
		<h1>
			Welcome to <NTT />

			<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" class="jinx-roll">
				<img src={jinx_6} width="100" class="float-right" alt="Jinx 11" loading="lazy" />
			</a>
		</h1>
	</div>
	<Laptop />

	<p>
		Welcome to <NTT />, the one-stop digital emporium where high tech meets high jinx, and where we
		believe that the only thing better than a good gadget is a good laugh!
	</p>

	<div class="text-wrap">
		<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
			<img src={cat_thumb_up} width="150" alt="Cat thumb up" loading="lazy" />
		</a>

		<p style="margin-top: 0;">
			Are you tired of tech reviews that sound like they were written by a malfunctioning robot? Do
			you crave a sprinkle of pizzazz with your processor specs? Look no further, dear netizen!
			Nischal Tech Tips has you covered with the kind of tech-savvy wizardry and sparkling wit that
			could only come from a guy who's built more PCs than you've had hot dinners.
			<br />
			Dive into our treasure trove of techie treats, where the puns fly as fast as the GPUs, and where
			we only take two things seriously: our tech and our commitment to entertaining you. (Okay, and
			maybe our obsession with RGB lighting, but who's counting?)
			<br />
			Nischal, our fearless leader and chief tech-tician, is part myth, part motherboard maestro, and
			100% committed to keeping your tech life buzzing with excitement. He's overclocked more systems
			than you've swiped right, and his cable management skills are so slick, they could make a spaghetti
			junction look like a piece of minimalist art.
		</p>

		<p>
			Here at NTT, we don't just push the envelope; we shred it, turn it into a paper airplane, and
			launch it to new heights with a custom-built drone. Join us as we dismantle the latest tech,
			piece by pixelated piece, delivering you the lowdown with our trademark blend of expertise and
			exuberance. We've got the scoop on everything from the almighty alt-tab to the mysterious
			magic that makes a computer actually... y'know... compute. Ever wondered what would happen if
			you hooked up sixteen monitors to one PC? Curious about the aerodynamics of a keyboard in zero
			gravity? We've got answers to questions you didn't even know you had!
		</p>
		<p>
			So, strap in and power up your sense of adventure. It's time to embark on the whimsical,
			warp-speed journey through the universe of tech. <NTT />: Where every click brings a tickle!
		</p>
		<div style="display:flex;justify-content: center;">
			Click me:
			<CounterInline />
		</div>
	</div>

	<p>pssss go buy the <a href="/store">NTT T-shirt!</a></p>
	<AshAndPikachu />
</section>

<section>
	<Testimonials />
</section>

<style>
	h1 {
		margin-top: 0;
	}

	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	.text-wrap {
		text-align: justify;
		overflow: hidden; /* Clears the float */
	}

	.text-wrap img {
		float: left; /* Use 'right' to float the image to the right */
	}

	@media (max-width: 767px) {
		.jinx-roll {
			display: none;
		}
	}
</style>
