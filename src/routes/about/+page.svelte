<script>
	import thank_you from '$lib/files/thankyou_for_choosing-NTT.pdf';
	import NTT from '../../components/NTT.svelte';
	import prof_khanal from '$lib/images/prof_khanal.webp';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About Nischal Tech Tips" />
</svelte:head>

<div class="text-column">
	<h1>About <NTT /></h1>

	<p><a href={thank_you}>Thank you for choosing Nischal Tech Tips!</a></p>

	<p>
		Welcome to <NTT />, the digital playground where Professor Nischal Khanal, a luminary in optics
		and photonics, merges the precision of scientific research with the unabashed enthusiasm of a
		true tech aficionado. Known in academic circles for his groundbreaking work on lasers that could
		potentially rewrite the laws of physics, Nischal also harbors a secret identity: a tech reviewer
		whose gadgets outnumber his research papers. With a mind that operates at the speed of light, he
		dissects the latest technology, diving into the heart of circuits and software with the zeal of
		a kid in a candy store. His ability to explain complex phenomena in ways that even a toaster
		could understand (if toasters could understand human speech, that is) makes him a revered figure
		in both the lab and the living room.

		<br />
		But <NTT /> isn't your average tech review site. Here, quantum mechanics meets quirky humor, and
		product tests often go hand-in-hand with time-travel theories (because who hasn't wanted to fast-forward
		to the release of the next big gadget?). Whether he's comparing camera resolutions to the resolving
		power of the human eye or using photonics principles to optimize his gaming setup's lighting, Nischal
		brings a fresh, hilarious perspective to the tech world. His reviews might tell you why your WiFi
		signal is weaker than your coffee or how your smartwatch might be plotting to take over the world.
		So, strap in and prepare for a journey where science fiction meets scientific facts, all delivered
		with a hefty dose of laughter.
	</p>

	<img src={prof_khanal} alt="Prof. Khanal's invite to be a keynote speaker" />
</div>
