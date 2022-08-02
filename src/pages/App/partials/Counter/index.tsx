import Icon from 'components/icons/Icon';
import { CounterContainer } from 'pages/App/partials/Counter/styles';
import { CSSProps } from 'shared/@types/Stitches';
import { useRecoilValue } from 'recoil';
import { pokemonListAtom, totalOfPokemonsAtom } from 'shared/store/atoms/pokemons/pokemons.atom';

type Props = CSSProps;

const PokemonCounter = ({ css, ...props }: Props) => {
	const totalOfPokemons = useRecoilValue(totalOfPokemonsAtom);
	const pokemons = useRecoilValue(pokemonListAtom);

	return (
		<CounterContainer css={css} {...props}>
			<Icon name={'red-pokeball'} />
			{totalOfPokemons} Pokémons <small>(showing only {pokemons.length})</small>
		</CounterContainer>
	);
};

export { PokemonCounter };