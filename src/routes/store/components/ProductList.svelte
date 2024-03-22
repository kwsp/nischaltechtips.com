<script>
	import NTT from '../../../components/NTT.svelte';
	import ntt_shirt_image from '$lib/images/ntt_shirt/ntt_shirt_2.png';
	import ntt_hopium from '$lib/images/products/ntt_hopium2.webp';
	import screwdriver from '$lib/images/products/ntt_screwdriver.webp';

	let products = [
		{
			name: 'NTT T-shirt',
			description:
				"Step into the world of tech fashion where the binary meets the binary stars with the exclusive Nischal Tech Tips T-Shirt! This isn't jusdit any piece of clothing; it's the Swiss Army Knife of T-shirts. Wearing it won’t just make you the most stylish geek in the room, it’ll also bump your tech cred up several notches.",
			price: '19.99',
			imageUrl: ntt_shirt_image,
			soldOut: false
		},
		{
			name: 'NTT Screw Driver',
			description: `Meet the NTT Screwdriver: the ultimate tool for turning your tech DIY projects into a comedy of errors! Crafted with a reversible head for those "oops" moments and a grip that's as likely to slip out of your hands as it is to snugly fit, it's perfect for tight spots, wrong spots, and "how did this even get here?" spots. Its magnetic tip is a treasure hunter's dream, adept at fetching lost screws and ancient, dust-covered coins alike. Plus, with an LED light to illuminate your missteps in stunning clarity and a handle that doubles as an impromptu snack holder, the NTT Screwdriver is the hilariously unfit hero of every assembly adventure. It's not just a tool; it's a testament to the thrilling unpredictability of DIY!`,
			price: '99.99',
			imageUrl: screwdriver,
			soldOut: true
		},
		{
			name: 'NTT Hopium',
			description:
				"Dive into the effervescent world of NTT Hopium, the mystical elixir guaranteed to elevate your tech game beyond the realms of mere mortals. With just one swig, you'll find your PC never dares to overheat, even as it crunches the latest games like they're mere appetizers. Watch in awe as \"Out of Memory\" errors become ancient myths, as your rig effortlessly juggles tabs like a digital circus performer. In the heat of battle, your enemies in Valorant won't stand a chance as you one-tap your way to glory with the precision of a seasoned sniper. But that's not all—NTT Hopium also promises lightning-fast downloads, so you spend more time conquering and less time waiting. It's not just a beverage; it's your ticket to becoming the tech wizard you were always destined to be. Say goodbye to digital dilemmas and toast to triumphs with NTT Hopium—because in the world of technology, who needs reality when you've got unlimited dreams?",
			price: '39.99',
			imageUrl: ntt_hopium,
			soldOut: true
		}
	];
</script>

<div class="store-title">
	<NTT />
	<span> STORE</span>
</div>

<div class="product-list">
	{#each products as product}
		<div class="product">
			<div class="product-card">
				<div class="product-image">
					<img src={product.imageUrl} alt={product.name} loading="lazy" />
				</div>
				{#if product.soldOut}
					<div class="sold-out">Sold out</div>
				{/if}
			</div>
			<!-- <div style="height:0;width:20%;padding-bottom:20%;background-color:red">
        <div>Content goes here</div>
      </div> -->
			<div class="product-info">
				<h2>{product.name}</h2>
				<p class="price">${product.price} USD</p>
				<p>{product.description}</p>
				<!-- Add additional details like color options or promotions here -->
			</div>
		</div>
	{/each}
</div>

<style>
	.store-title {
		margin: 2rem;
		font-weight: 700;
		font-size: 1.4rem;
	}

	.product-list {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		gap: 20px;
		margin: 2rem;
	}

	.product {
		flex-basis: calc(33% - 20px);
		text-align: center;
		position: relative;
	}

	.product-card {
		border-radius: 1.4rem;
		background-color: var(--color-background-2);
		width: 100%;
		height: auto;
		aspect-ratio: 1/1;
		overflow: hidden;
	}

	.product-image img {
		position: absolute;
		top: 0;
		left: 0;

		width: 100%;
		aspect-ratio: 1/1;
		object-fit: contain; /* Use 'contain' to avoid cropping if necessary */
		border-radius: 10px 10px 0 0; /* Rounded corners on the top side */
		transition: transform 0.3s ease;
	}

	.product-image:hover img {
		transform: scale(1.1);
	}

	.product-info {
		padding: 16px;
	}

	.product-info h2,
	.product-info p {
		margin: 0;
		padding: 0;
	}

	.product-info h2 {
		font-size: 1.2em;
		font-weight: bold;
		color: var(--color-black);
		margin-bottom: 8px; /* Space between title and price */
	}

	.product-info .price {
		font-weight: bold;
		color: #e53935; /* Price color */
		margin-bottom: 8px;
	}

	.sold-out {
		position: absolute;
		top: 16px;
		left: 16px;
		background: #ff4136;
		color: white;
		padding: 4px 8px;
		border-radius: 4rem;
		font-size: 0.8em;
	}

	/* Responsive adjustments */
	@media (max-width: 768px) {
		.product {
			flex-basis: calc(50% - 20px);
		}
	}

	@media (max-width: 480px) {
		.product {
			flex-basis: 100%;
		}
	}
</style>
