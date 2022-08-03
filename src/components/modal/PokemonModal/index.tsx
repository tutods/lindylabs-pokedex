import { useCallback } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import redPokeball from 'assets/imgs/pokeball-red.png';
import Icon from 'components/icons/Icon';
import { PokemonTypeBadge } from 'components/ui/badges/Type';
import { searchPokemonService } from 'shared/services/api/pokemons/searchPokemon.service';
import { pokemonModalAtom } from 'shared/store/atoms/pokemons/pokemon-modal.atom';
import { pokemonListAtom, totalOfPokemonsAtom } from 'shared/store/atoms/pokemons/pokemons.atom';
import * as Dialog from '@radix-ui/react-dialog';

import {
	NavigationIcon,
	StyledModalContent,
	StyledModalDescription,
	StyledModalOverlay,
	StyledModalTitle,
	StyledPokeball,
	StyledPokemonImage,
	StyledTopModal
} from './styles';

const PokemonModal = () => {
	const [pokemonModal, setPokemonModal] = useRecoilState(pokemonModalAtom);

	const totalOfPokemons = useRecoilValue(totalOfPokemonsAtom);
	const pokemons = useRecoilValue(pokemonListAtom);

	const { pokemon, isOpen } = pokemonModal;

	const handleOpenModal = (status: boolean) =>
		setPokemonModal((prevState) => ({
			...prevState,
			isOpen: status
		}));

	const pokemonImage =
		pokemon?.sprites.other.dream_world.front_default ||
		pokemon?.sprites.other.home.front_default ||
		pokemon?.sprites.other['official-artwork'].front_default;

	const handleChangePokemon = useCallback(
		async (action: 'next' | 'previous') => {
			try {
				const pokemonId = action === 'next' ? pokemon!.id + 1 : pokemon!.id - 1;

				const data = await searchPokemonService(String(pokemonId), pokemons);

				setPokemonModal((prev) => ({
					...prev,
					pokemon: data
				}));
			} catch {
				alert(`It's not possible show the ${action} Pokémon!`);
			}
		},
		[pokemon, pokemons, setPokemonModal]
	);

	return (
		<Dialog.Root open={isOpen} onOpenChange={handleOpenModal}>
			<Dialog.Portal>
				<StyledModalOverlay />
				<StyledModalContent type={pokemon?.types[0].type.name}>
					<StyledModalTitle>
						<span>
							<Dialog.Close asChild>
								<button type={'button'}>
									<Icon name={'arrow-left'} />
								</button>
							</Dialog.Close>
							<h3>{pokemon?.name.replaceAll('-', ' ')}</h3>
						</span>
						<span>#{String(pokemon?.id).padStart(3, '0')}</span>
					</StyledModalTitle>

					<StyledTopModal>
						<StyledPokeball css={{ size: '$208' }} name={'pokeball'} />

						{pokemon && pokemon.id > 1 && (
							<NavigationIcon
								direction={'left'}
								name={'caret-left'}
								onClick={() => handleChangePokemon('previous')}
							/>
						)}

						{pokemon && pokemon.id < totalOfPokemons && (
							<NavigationIcon
								direction={'right'}
								name={'caret-right'}
								onClick={() => handleChangePokemon('next')}
							/>
						)}

						<StyledPokemonImage dontHaveImg={!pokemonImage}>
							<img alt={pokemon?.name} src={pokemonImage ?? redPokeball} />
						</StyledPokemonImage>
					</StyledTopModal>

					<StyledModalDescription dontHaveImg={!pokemonImage}>
						<div>
							{pokemon?.types.map((pokemonType) => (
								<PokemonTypeBadge
									key={pokemonType.type.name}
									type={pokemonType.type.name}
								/>
							))}
						</div>

						<h4>About</h4>

						<div>
							<div>
								<span>
									<Icon name={'weight'} />
									{pokemon?.weight} kg
								</span>
								<span>Weight</span>
							</div>
							<div>
								<span>
									<Icon name={'rule'} />
									{pokemon?.height} m
								</span>
								<span>Height</span>
							</div>
						</div>
					</StyledModalDescription>
				</StyledModalContent>
			</Dialog.Portal>
		</Dialog.Root>
	);
};

export { PokemonModal };
