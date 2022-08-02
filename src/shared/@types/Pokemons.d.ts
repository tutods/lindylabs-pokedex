import { PokemonTypeEnum } from 'shared/enum/PokemonType.enum';

type PokemonStat = {
	base_stat: number;
	effort: number;
	stat: {
		name: string;
		url: string;
	};
};

type PokemonType = {
	name: PokemonTypeEnum;
	url: string;
};

type Pokemon = {
	abilities: {
		is_hidden: boolean;
		slot: number;
		ability: {
			name: string;
			url: string;
		};
	}[];
	base_experience: number;
	forms: {
		name: string;
		url: string;
	}[];
	game_indices: {
		game_index: number;
		version: {
			name: string;
			url: string;
		};
	}[];
	height: number;
	held_items: any[];
	id: number;
	is_default: boolean;
	location_area_encounters: string;
	moves: {
		move: {
			name: string;
			url: string;
		};
		version_group_details: {
			level_learned_at: number;
			move_learn_method: {
				name: string;
				url: string;
			};
			version_group: {
				name: string;
				url: string;
			};
		}[];
	}[];
	name: string;
	order: number;
	past_types: any[];
	species: {
		name: string;
		url: string;
	};
	sprites: {
		back_default: string;
		back_female: string | null;
		back_shiny: string;
		back_shiny_female: string | null;
		front_default: string;
		front_female: string | null;
		front_shiny: string;
		front_shiny_female: string | null;
		other: {
			dream_world: {
				front_default: string;
				front_female: string | null;
			};
			home: {
				front_default: string;
				front_female: string | null;
				front_shiny: string;
				front_shiny_female: string | null;
			};
			'official-artwork': {
				front_default: string;
			};
		};
	};
	stats: PokemonStat[];
	types: {
		slot: number;
		type: PokemonType;
	}[];
	weight: number;
};

type PokemonsResponse = {
	count: number;
	next: string;
	previous: string | null;
	results: Pokemon[];
};

type OriginalPokemonsResponse = {
	count: number;
	next: string;
	previous: string | null;
	results: {
		name: string;
		url: string;
	}[];
};

export { PokemonType, PokemonStat, Pokemon, PokemonsResponse, OriginalPokemonsResponse };