<script>
	import thank_you from '$lib/files/thankyou_for_choosing-NTT.pdf';
	import NTT from '../../components/NTT.svelte';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About Nischal Tech Tips" />
</svelte:head>

<div class="text-column">
	<h1>About <NTT /></h1>

	<p><a href={thank_you}>Thank you for choosing Nischal Tech Tips!</a></p>
</div>
