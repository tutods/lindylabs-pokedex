import Icon from 'components/icons/Icon';
import { Container } from 'components/ui/Container';
import { useRecoilState } from 'recoil';
import { currentFilterAtom } from 'shared/store/atoms/filter';
import { PokemonTypeFilter } from './partials/Filter';
import { HeroSection } from './partials/Hero';
import { PokemonsSection, SearchGroup, SearchSection } from './styles';

const App = () => {
	const [currentFilter, setCurrentFilter] = useRecoilState(currentFilterAtom);

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
				<Container>
					<PokemonTypeFilter
						currentFilter={currentFilter}
						callback={handleFilterChange}
					/>
				</Container>
			</PokemonsSection>
		</>
	);
};

export { App };