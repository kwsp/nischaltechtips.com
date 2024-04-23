import { dev } from '$app/environment';

const gbGames = [
	{
		title: 'Pokemon Blue',
		slug: 'pokemon_blue',
		romURL: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/163870/PokemonBlue.gb'
	},
	{
		title: "Link's Awakening",
		slug: 'links_awakening',
		romURL: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/163870/LinksAwakening.gb'
	}
];

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
export const csr = dev;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;
