import Icon from 'components/icons/Icon';
import { Container } from 'components/ui/Container';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { currentFilterAtom } from 'shared/store/atoms/filter.atom';
import { PokemonTypeFilter } from './partials/Filter';
import { HeroSection } from './partials/Hero';
import {
	ContentContainer,
	CustomContainer,
	GenericBottomContainer,
	PokemonListContainer,
	PokemonsSection,
	SearchGroup,
	SearchSection
} from './styles';
import { pokemonListAtom, totalOfPokemonsAtom } from 'shared/store/atoms/pokemons/pokemons.atom';
import { useEffect, useState } from 'react';
import { getPokemonsService } from 'shared/services/api/getPokemons.service';
import { PokemonCard } from 'components/ui/cards/PokemonsCard';
import { haveNextAtom, offsetAtom } from 'shared/store/atoms/pagination.atom';
import { Loading } from 'components/ui/Loading';
import { PrimaryButton } from 'components/ui/button/PrimaryButton';
import { PokemonCounter } from 'pages/App/partials/Counter';
import { PokemonModal } from 'components/modal/PokemonModal';
import { pokemonModalAtom } from 'shared/store/atoms/pokemons/pokemon-modal.atom';

const LIMIT_SIZE = 9;

const App = () => {
	const setTotalOfPokemons = useSetRecoilState(totalOfPokemonsAtom);

	const setPokemonModal = useSetRecoilState(pokemonModalAtom);
	const [isLoading, setIsLoading] = useState(false);
	const [currentFilter, setCurrentFilter] = useRecoilState(currentFilterAtom);

	const [pokemons, setPokemons] = useRecoilState(pokemonListAtom);

	const [offset, setOffset] = useRecoilState(offsetAtom);
	const [haveNext, setHaveNext] = useRecoilState(haveNextAtom);

	const getData = async (offsetValue: number) => {
		setIsLoading(true);
		const { results, count, next, previous } = await getPokemonsService(offsetValue);
		setTotalOfPokemons(count);

		if (results) {
			setPokemons((prevState) => {
				return offset === 0 ? results : [...prevState, ...results];
			});
		}

		setHaveNext(!!next);

		setIsLoading(false);
	};

	useEffect(() => {
		getData(0);

		return () => {
			setPokemons([]);
			setOffset(0);
			setIsLoading(false);
			setHaveNext(false);
		};
	}, []);

	useEffect(() => {
		getData(offset);
	}, [offset]);

	// useEffect(() => {
	// 	handleGetData();
	// }, []);

	const handleFilterChange = (filter: string) => setCurrentFilter(filter);

	return (
		<>
			<HeroSection />
			<PokemonModal />

			<SearchSection>
				<Container>
					<h2>Select your Pokémon</h2>

					<SearchGroup>
						<button type={'submit'}>
							<Icon size={16} name={'search'} />
						</button>
						<input type="text" name="search" placeholder={'Search name or code'} />
					</SearchGroup>
				</Container>
			</SearchSection>

			<PokemonsSection id="pokemons">
				<CustomContainer>
					<PokemonTypeFilter
						css={{
							position: 'sticky',
							top: 0,
							height: 'max-content'
						}}
						currentFilter={currentFilter}
						callback={handleFilterChange}
					/>
					<ContentContainer>
						<PokemonCounter
							css={{
								paddingBottom: '$60'
							}}
						/>

						<PokemonListContainer>
							{pokemons.map((pokemon) => (
								<PokemonCard
									key={`${pokemon.id}-${pokemon.name.replace(' ', '-')}`}
									pokemon={pokemon}
									onClick={() =>
										setPokemonModal((prev) => ({
											isOpen: true,
											pokemon: pokemon
										}))
									}
								/>
							))}
						</PokemonListContainer>

						{isLoading && (
							<GenericBottomContainer>
								<Loading size={16} color={'blue'} />
							</GenericBottomContainer>
						)}

						{(haveNext || isLoading) && (
							<GenericBottomContainer>
								<PrimaryButton
									onClick={() => setOffset((prev) => prev + LIMIT_SIZE)}
								>
									Load more Pokémons
								</PrimaryButton>
							</GenericBottomContainer>
						)}
					</ContentContainer>
				</CustomContainer>
			</PokemonsSection>
		</>
	);
};

export { App };