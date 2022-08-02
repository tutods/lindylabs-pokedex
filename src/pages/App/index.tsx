import Icon from 'components/icons/Icon';
import { Container } from 'components/ui/Container';
import { useRecoilState } from 'recoil';
import { currentFilterAtom } from 'shared/store/atoms/filter.atom';
import { PokemonTypeFilter } from './partials/Filter';
import { HeroSection } from './partials/Hero';
import {
	CustomContainer,
	PokemonListContainer,
	PokemonsSection,
	SearchGroup,
	SearchSection
} from './styles';
import { pokemonListAtom } from 'shared/store/atoms/pokemons/pokemons.atom';
import { useCallback, useEffect, useState } from 'react';
import { getPokemonsService } from 'shared/services/api/getPokemons.service';
import { PokemonCard } from 'components/ui/cards/PokemonsCard';
import InfiniteScroll from 'react-infinite-scroll-component';

const LIMIT_SIZE = 9;

const App = () => {
	const [currentFilter, setCurrentFilter] = useRecoilState(currentFilterAtom);

	const [pokemons, setPokemons] = useRecoilState(pokemonListAtom);

	// States to use on Infinite Scrolling
	const [pagination, setPagination] = useState<{
		offset: number;
		previousOffset?: number;
		hasMore: boolean;
	}>({
		offset: 0,
		previousOffset: 0,
		hasMore: true
	});

	const handleGetData = useCallback(async () => {
		const { results, next, previous } = await getPokemonsService(pagination.offset);

		if (results) {
			console.log(results);
			setPokemons((prevState) => [...prevState, ...results]);
		}

		if (next) {
			setPagination((prevState) => ({
				...prevState,
				offset: prevState.offset + LIMIT_SIZE,
				hasMore: true
			}));
		}

		if (previous && pagination.offset > 0) {
			setPagination((prevState) => ({
				...prevState,
				previousOffset: prevState.offset - LIMIT_SIZE,
				hasMore: true
			}));
		}
	}, [pagination]);

	useEffect(() => {
		handleGetData();

		return () => {
			setPokemons([]);
			setPagination({
				offset: 0,
				previousOffset: 0,
				hasMore: true
			});
		};
	}, []);

	const handleFilterChange = (filter: string) => setCurrentFilter(filter);

	return (
		<>
			<HeroSection />

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
						css={{ position: 'sticky', top: 0, height: 'max-content' }}
						currentFilter={currentFilter}
						callback={handleFilterChange}
					/>
					<InfiniteScroll
						style={{ overflow: 'hidden' }}
						dataLength={pokemons.length}
						next={handleGetData}
						hasMore={pagination.hasMore}
						loader={<h2>Loading...</h2>}
					>
						<PokemonListContainer>
							{pokemons.map((pokemon) => (
								<PokemonCard
									key={`${pokemon.id}-${pokemon.name.replace(' ', '-')}`}
									pokemon={pokemon}
								/>
							))}
						</PokemonListContainer>
					</InfiniteScroll>
				</CustomContainer>
			</PokemonsSection>
		</>
	);
};

export { App };