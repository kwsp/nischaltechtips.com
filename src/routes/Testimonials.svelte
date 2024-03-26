<script>
	import NTT from '../components/NTT.svelte';
	import TestimonialCard from './TestimonialCard.svelte';

	import galadriel from '$lib/images/testimonials/build_galadriel.webp';
	import jinx from '$lib/images/testimonials/captain_jinx.webp';
	import sungmin from '$lib/images/testimonials/sungmin_aimlabs.webp';

	const testimonials = [
		{
			imageUrl: galadriel,
			customerName: 'Tayloy',
			customerTitle: 'Valorant E-girl',
			quote:
				"Oh my motherboard! Before Nischal Tech Tips came into my life, my attempts at building a gaming PC were more tragic than accidentally formatting my only backup drive. Then Nischal Tech Tips stepped in, and voilà! My PC, Galadriel, was born—glowing with more RGB than a unicorn at a rave. With Nischal's wizard-like guidance, not only did I learn the difference between a SATA cable and a stubborn spaghetti noodle, but I also managed to build the gaming shrine I've always dreamed of. Now, my frame rates are higher than my caffeine levels during finals week. Thanks, Nischal Tech Tips, for helping me ascend to PC Valhalla where the eSports elves roam!"
		},
		{
			imageUrl: sungmin,
			customerName: 'Summer',
			customerTitle: 'Aspiring Valorant E-girl',
			quote:
				"Who knew that falling for a tech guru like Nischal would come with so many perks? Not only does he ensure our home is decked out with the latest gadgets (making me feel like I'm living in a cozy, high-tech bubble), but his heart is just as big as his CPU collection. And let's talk about his cooking - I swear, the way to a woman's heart is also through a well-assembled motherboard and homemade pasta. It's a unique combo, but Nischal has the recipe down! But the real gem? It's his kindness and caring nature. Whether it's fixing a tech glitch or crafting a meal that rivals the complexity of assembling a PC, Nischal does it all with a smile that could light up an LED strip. So here's to Nischal - the man who's my personal tech support, Michelin-star chef, and aim trainer all rolled into one. How did I get so lucky?"
		},
		{
			imageUrl: jinx,
			customerName: 'Powder',
			customerTitle: 'Happy cat',
			quote:
				"Purr-hello! I'm Powder, Chief Feline Officer at Nischal Tech Tips. While my human dabbles in gadgets, I've mastered the art of napping on toasty gaming PCs and scoring treats for my 'hard work.' Warm vents? Check. Yummy snacks? Double-check. It's a purrfect paradise. High-paws to Nischal for serving my every whim. Five out of five meows!"
		}
	];
</script>

<section>
	<h1><NTT /> Testimonials</h1>

	<div class="testimonial-list">
		{#each testimonials as testimonial}
			<TestimonialCard
				imageSrc={testimonial.imageUrl}
				testimonial={testimonial.quote}
				customerName={testimonial.customerName}
				customerTitle={testimonial.customerTitle}
			/>
		{/each}
	</div>
</section>

<style>
	section {
		display: flex;
		align-items: center;
		flex-direction: column;
		width: 100%;
	}
</style>
