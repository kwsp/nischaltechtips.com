<script>
	import './styles.css';
	import Header from './Header.svelte';
	import logo from '$lib/images/NTT_logo_notext.svg';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<div class="logo">
			<img src={logo} width="50" alt="Nischal Tech Tips Logo" />
		</div>
		<p class="footer-copyright">© NISCHAL TECH TIPS Powered by KWSP</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
		font-weight: 700;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
