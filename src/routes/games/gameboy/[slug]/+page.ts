/** @type {import('./$types').PageLoad} */

const GameboyGames = [
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

export function load({ params }) {
	params.slug;
	const game = GameboyGames.find((game) => game.slug == params.slug);
	if (game === undefined) {
		return {
			game: {
				title: '',
				romURL: '',
				exists: false
			}
		};
	}

	return {
		game: {
			title: game.title,
			romURL: game.romURL,
			exists: true
		}
	};
}

export const prerender = true;
