import Icon from 'components/icons/Icon';
import { CounterContainer } from 'pages/App/partials/Counter/styles';
import { CSSProps } from 'shared/@types/Stitches';
import { useRecoilValue } from 'recoil';
import { pokemonListAtom, totalOfPokemonsAtom } from 'shared/store/atoms/pokemons/pokemons.atom';
import { currentFilterAtom } from 'shared/store/atoms/filter.atom';

type Props = CSSProps;

const PokemonCounter = ({ css, ...props }: Props) => {
	const totalOfPokemons = useRecoilValue(totalOfPokemonsAtom);
	const pokemons = useRecoilValue(pokemonListAtom);
	const filter = useRecoilValue(currentFilterAtom);

	const conditions = totalOfPokemons !== pokemons.length && filter === 'all';

	return (
		<CounterContainer css={css} {...props}>
			<Icon name={'red-pokeball'} />
			{filter !== 'all' ? pokemons.length : totalOfPokemons} Pokémons{' '}
			{conditions && <small>(showing {pokemons.length})</small>}
		</CounterContainer>
	);
};

export { PokemonCounter };