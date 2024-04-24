<script lang="ts">
	import { page } from '$app/stores';
	import logo from '$lib/images/NTT_logo_notext.svg';
	import github from '$lib/images/github.svg';

	let isOpen = false; // State to manage the menu visibility

	const isCurrent = (pathname: string, slug: string) => {
		if (slug.length === 0) {
			return pathname === '/';
		}
		return pathname.startsWith(`/${slug}`);
	};

	const navData = [
		{ slug: '', title: 'Home' },
		{ slug: 'store', title: 'Store' },
		{ slug: 'reviews', title: 'Reviews' },
		{ slug: 'games', title: 'Games' },
		{ slug: 'about', title: 'About' }
	];
</script>

<header>
	<div class="corner">
		<a href="/">
			<img src={logo} alt="NTT Logo" />
		</a>
	</div>

	<nav>
		<button class="toggle-button" on:click={() => (isOpen = !isOpen)}> Menu </button>
		<ul class={isOpen ? 'open' : ''}>
			{#each navData as section}
				<!-- <li aria-current={$page.url.pathname === `/${section.slug}` ? 'page' : undefined}> -->
				<li aria-current={isCurrent($page.url.pathname, section.slug) ? 'page' : undefined}>
					<a href="/{section.slug}">{section.title}</a>
				</li>
			{/each}
		</ul>
	</nav>

	<div class="corner">
		<a href="https://github.com/kwsp/nischaltechtips.com">
			<img src={github} alt="GitHub" />
		</a>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		width: 4em;
		height: 4em;
		/* margin: 0 1rem 0 1rem; */
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 3em;
		height: 3em;
		object-fit: contain;
	}

	nav {
		width: 100%;
		display: flex;
		overflow: auto;
		justify-content: center;
	}

	nav ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex; /* Always show the menu in a flex layout on non-mobile screens */
		justify-content: center;
		align-items: center;
		list-style: none;
		background-size: contain;
	}

	nav li {
		position: relative;
		height: 100%;
	}

	nav li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	.toggle-button {
		display: none;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
