import { Container } from 'components/ui/Container';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { currentFilterAtom } from 'shared/store/atoms/filter.atom';
import { PokemonTypeFilter } from './partials/Filter';
import { HeroSection } from './partials/Hero';
import {
	ContentContainer,
	CustomContainer,
	GenericBottomContainer,
	PokemonsSection,
	SearchSection
} from './styles';
import { pokemonListAtom, totalOfPokemonsAtom } from 'shared/store/atoms/pokemons/pokemons.atom';
import { useEffect, useRef, useState } from 'react';
import { getPokemonsService } from 'shared/services/api/pokemons/getPokemons.service';
import { haveNextAtom, offsetAtom } from 'shared/store/atoms/pagination.atom';
import { Loading } from 'components/ui/Loading';
import { PrimaryButton } from 'components/ui/button/PrimaryButton';
import { PokemonCounter } from 'pages/Home/partials/Counter';
import { PokemonModal } from 'components/modal/PokemonModal';
import { getPokemonsByType } from 'shared/services/api/pokemons/getPokemonsByType.service';
import { PokemonTypeEnum } from 'shared/enum/PokemonType.enum';
import { PokemonSearch } from 'pages/Home/partials/Search';
import { PokemonList } from 'pages/Home/partials/PokemonList';

const LIMIT_SIZE = 9;

const Home = () => {
	const pokemonsListRef = useRef<HTMLDivElement>(null);

	const setTotalOfPokemons = useSetRecoilState(totalOfPokemonsAtom);

	const [isLoading, setIsLoading] = useState(false);
	const [currentFilter, setCurrentFilter] = useRecoilState(currentFilterAtom);

	const [pokemons, setPokemons] = useRecoilState(pokemonListAtom);

	const [offset, setOffset] = useRecoilState(offsetAtom);
	const [haveNext, setHaveNext] = useRecoilState(haveNextAtom);

	const getData = async (offsetValue: number = 0) => {
		setIsLoading(true);

		if (currentFilter === 'all') {
			const { results, count, next, previous } = await getPokemonsService(offsetValue);
			setTotalOfPokemons(count);

			if (results) {
				setPokemons((prevState) => {
					return offset === 0 ? results : [...prevState, ...results];
				});
			}

			setHaveNext(!!next);
		} else {
			const { results } = await getPokemonsByType(currentFilter);

			if (results) {
				setPokemons(results);
			}
		}

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

	useEffect(() => {
		setOffset(0);
		getData();
	}, [currentFilter]);

	const handleFilterChange = (filter: 'all' | PokemonTypeEnum) => {
		if (pokemonsListRef) {
			pokemonsListRef?.current?.scrollIntoView();
		}

		setIsLoading(true);
		setCurrentFilter(filter);
	};

	return (
		<>
			<HeroSection scrollTo={pokemonsListRef} />
			<PokemonModal />

			<SearchSection>
				<Container>
					<h2>Select your Pokémon</h2>

					<PokemonSearch />
				</Container>
			</SearchSection>

			<PokemonsSection ref={pokemonsListRef} id="pokemons">
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

						<PokemonList />

						{isLoading && (
							<GenericBottomContainer>
								<Loading size={16} color={'blue'} />
							</GenericBottomContainer>
						)}

						{currentFilter === 'all' && (haveNext || !isLoading) && (
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

export { Home };