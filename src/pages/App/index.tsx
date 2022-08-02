import Icon from 'components/icons/Icon';
import { Container } from 'components/ui/Container';
import { useRecoilState } from 'recoil';
import { currentFilterAtom } from 'shared/store/atoms/filter.atom';
import { PokemonTypeFilter } from './partials/Filter';
import { HeroSection } from './partials/Hero';
import {
	ContentContainer,
	CustomContainer,
	PokemonListContainer,
	PokemonsSection,
	SearchGroup,
	SearchSection
} from './styles';
import { pokemonListAtom } from 'shared/store/atoms/pokemons/pokemons.atom';
import { useEffect, useState } from 'react';
import { getPokemonsService } from 'shared/services/api/getPokemons.service';
import { PokemonCard } from 'components/ui/cards/PokemonsCard';

const LIMIT_SIZE = 9;

const App = () => {
	const [isLoading, setIsLoading] = useState(false);

	const [currentFilter, setCurrentFilter] = useRecoilState(currentFilterAtom);

	const [pokemons, setPokemons] = useRecoilState(pokemonListAtom);

	const [offset, setOffset] = useState(0);

	// // States to use on Infinite Scrolling
	// const [pagination, setPagination] = useState<{
	// 	offset: number;
	// 	previousOffset?: number;
	// 	hasMore: boolean;
	// }>({
	// 	offset: 0,
	// 	previousOffset: 0,
	// 	hasMore: true
	// });

	const getData = async (offsetValue: number) => {
		setIsLoading(true);
		const { results, next, previous } = await getPokemonsService(offsetValue);
		console.log('ENTROU');

		if (results) {
			setPokemons((prevState) => {
				return offset === 0 ? results : [...prevState, ...results];
			});
		}
		setIsLoading(false);
	};
	useEffect(() => {
		getData(0);
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
					{/*<InfiniteScroll*/}
					{/*	style={{ overflow: 'hidden' }}*/}
					{/*	dataLength={pokemons.length}*/}
					{/*	next={handleGetData}*/}
					{/*	hasMore={pagination.hasMore}*/}
					{/*	loader={<h2>Loading...</h2>}*/}
					{/*>*/}
					<ContentContainer>
						<PokemonListContainer>
							{pokemons.map((pokemon) => (
								<PokemonCard
									key={`${pokemon.id}-${pokemon.name.replace(' ', '-')}`}
									pokemon={pokemon}
								/>
							))}
						</PokemonListContainer>
						<button onClick={() => setOffset((prev) => prev + LIMIT_SIZE)}>
							Load More
						</button>
					</ContentContainer>
				</CustomContainer>
			</PokemonsSection>
		</>
	);
};

export { App };