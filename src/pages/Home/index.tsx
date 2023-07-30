import { useCallback, useEffect, useRef, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';

import { Button } from 'components/Button';
import { Container } from 'components/Container';
import { Loading } from 'components/Loading';
import { PokemonModal } from 'components/modal/PokemonModal';
import { PokemonSearch } from 'components/Search';
import { PokemonCounter } from 'pages/Home/partials/Counter';
import { PokemonList } from 'pages/Home/partials/PokemonList';
import type { PokemonTypeEnum } from 'shared/enum/PokemonType.enum';
import { getPokemonsService } from 'shared/services/api/pokemons/getPokemons.service';
import { getPokemonsByType } from 'shared/services/api/pokemons/getPokemonsByType.service';
import { currentFilterAtom } from 'shared/store/atoms/filter.atom';
import { haveNextAtom, offsetAtom } from 'shared/store/atoms/pagination.atom';
import { pokemonListAtom, totalOfPokemonsAtom } from 'shared/store/atoms/pokemons/pokemons.atom';

import { PokemonTypeFilter } from './partials/Filter';
import { HeroSection } from './partials/Hero';
import {
  ContentContainer,
  CustomContainer,
  GenericBottomContainer,
  PokemonsSection,
  SearchSection,
} from './styles';

const LIMIT_SIZE = 9;

const Home = () => {
  const pokemonsListRef = useRef<HTMLDivElement>(null);

  const setTotalOfPokemons = useSetRecoilState(totalOfPokemonsAtom);

  const [isLoading, setIsLoading] = useState(false);
  const [currentFilter, setCurrentFilter] = useRecoilState(currentFilterAtom);

  const setPokemons = useSetRecoilState(pokemonListAtom);

  const [offset, setOffset] = useRecoilState(offsetAtom);
  const [haveNext, setHaveNext] = useRecoilState(haveNextAtom);

  const getData = useCallback(
    async (offsetValue = 0) => {
      setIsLoading(true);

      if (currentFilter === 'all') {
        const { results, count, next } = await getPokemonsService(offsetValue);
        setTotalOfPokemons(count);

        if (results) {
          setPokemons(prevState => {
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
    },
    [currentFilter, offset, setHaveNext, setPokemons, setTotalOfPokemons],
  );

  useEffect(() => {
    getData(0);

    return () => {
      setPokemons([]);
      setOffset(0);
      setIsLoading(false);
      setHaveNext(false);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getData(offset);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset]);

  useEffect(() => {
    setOffset(0);
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentFilter]);

  const handleFilterChange = useCallback(
    (filter: 'all' | PokemonTypeEnum) => {
      if (pokemonsListRef) {
        pokemonsListRef?.current?.scrollIntoView();
      }

      setIsLoading(true);
      setCurrentFilter(filter);
    },
    [setCurrentFilter],
  );

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

      <PokemonsSection id="pokemons" ref={pokemonsListRef}>
        <CustomContainer>
          <PokemonTypeFilter
            callback={handleFilterChange}
            currentFilter={currentFilter}
            css={{
              position: 'sticky',
              top: 0,
              height: 'max-content',
            }}
          />
          <ContentContainer>
            <PokemonCounter
              css={{
                paddingBottom: '$60',
              }}
            />

            <PokemonList />

            {isLoading && (
              <GenericBottomContainer>
                <Loading color="blue" size={16} />
              </GenericBottomContainer>
            )}

            {currentFilter === 'all' && (haveNext || !isLoading) && (
              <GenericBottomContainer>
                <Button
                  disabled={isLoading}
                  onClick={() => setOffset(prev => prev + LIMIT_SIZE)}
                  variant="primary"
                >
                  Load more Pokémons
                </Button>
              </GenericBottomContainer>
            )}
          </ContentContainer>
        </CustomContainer>
      </PokemonsSection>
    </>
  );
};

export { Home };
