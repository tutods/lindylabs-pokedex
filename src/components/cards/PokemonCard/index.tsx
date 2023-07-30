import { CardShape, ImageContainer, InfoContainer } from 'components/cards/PokemonCard/styles';
import { PokemonTypeIcon } from 'components/icons/PokemonType';
import type { Pokemon } from 'shared/@types/Pokemon';

type Props = {
  pokemon: Pokemon;
  onClick: () => void;
};

const PokemonCard = ({ pokemon, onClick }: Props) => {
  const type = pokemon.types[0].type.name;

  const pokemonImage =
    pokemon.sprites.other.dream_world.front_default ||
    pokemon.sprites.other.home.front_default ||
    pokemon.sprites.other['official-artwork'].front_default;

  return (
    <CardShape onClick={onClick} type={type}>
      <ImageContainer type={type}>
        <div />
        {pokemonImage && <img alt={pokemon.name} src={pokemonImage} />}
      </ImageContainer>

      <InfoContainer>
        <div>
          <p>#{String(pokemon.id).padStart(3, '0')}</p>
          <h3>{pokemon.name.replaceAll('-', ' ')}</h3>
        </div>

        <PokemonTypeIcon type={type} />
      </InfoContainer>
    </CardShape>
  );
};

export { PokemonCard };
