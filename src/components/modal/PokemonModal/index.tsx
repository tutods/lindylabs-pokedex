import * as Dialog from '@radix-ui/react-dialog';
import {
	StyledModalContent,
	StyledModalDescription,
	StyledModalOverlay,
	StyledModalTitle,
	StyledPokeball,
	StyledPokemonImage,
	StyledTopModal
} from './styles';
import Icon from 'components/icons/Icon';
import { useRecoilState } from 'recoil';
import { pokemonModalAtom } from 'shared/store/atoms/pokemons/pokemon-modal.atom';
import { PokemonTypeBadge } from 'components/ui/badges/Type';
import redPokeball from 'assets/imgs/pokeball-red.png';

const PokemonModal = () => {
	const [pokemonModal, setPokemonModal] = useRecoilState(pokemonModalAtom);

	const { pokemon, isOpen } = pokemonModal;

	const handleOpenModal = (isOpen: boolean) =>
		setPokemonModal((prevState) => ({
			...prevState,
			isOpen
		}));

	const pokemonImage =
		pokemon?.sprites.other.dream_world.front_default ||
		pokemon?.sprites.other.home.front_default ||
		pokemon?.sprites.other['official-artwork'].front_default;

	return (
		<Dialog.Root open={isOpen} onOpenChange={handleOpenModal}>
			<Dialog.Portal>
				<StyledModalOverlay />
				<StyledModalContent type={pokemon?.types[0].type.name}>
					<StyledModalTitle>
						<span>
							<Dialog.Close asChild>
								<button>
									<Icon name="arrow-left" />
								</button>
							</Dialog.Close>
							<h3>{pokemon?.name.replaceAll('-', ' ')}</h3>
						</span>
						<span>#{String(pokemon?.id).padStart(3, '0')}</span>
					</StyledModalTitle>

					<StyledTopModal>
						<StyledPokeball name={'pokeball'} css={{ size: '$208' }} />

						<StyledPokemonImage dontHaveImg={!pokemonImage}>
							<img src={pokemonImage ?? redPokeball} alt={pokemon?.name} />
						</StyledPokemonImage>
					</StyledTopModal>

					<StyledModalDescription dontHaveImg={!pokemonImage}>
						<div>
							{pokemon?.types.map((pokemonType) => (
								<PokemonTypeBadge
									type={pokemonType.type.name}
									key={pokemonType.type.name}
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