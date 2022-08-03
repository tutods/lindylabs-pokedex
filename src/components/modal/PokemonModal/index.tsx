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

const PokemonModal = () => {
	const [pokemonModal, setPokemonModal] = useRecoilState(pokemonModalAtom);

	const { pokemon, isOpen } = pokemonModal;

	const handleOpenModal = (isOpen: boolean) =>
		setPokemonModal((prevState) => ({
			...prevState,
			isOpen
		}));

	return (
		<Dialog.Root open={isOpen} onOpenChange={handleOpenModal}>
			<Dialog.Portal>
				<StyledModalOverlay />
				<StyledModalContent type={pokemon?.types[0].type.name}>
					<StyledModalTitle>
						<div>
							<Dialog.Close asChild>
								<Icon name="arrow-left" />
							</Dialog.Close>
							<h3>{pokemon?.name}</h3>
						</div>
						<span>#{String(pokemon?.id).padStart(3, '0')}</span>
					</StyledModalTitle>

					<StyledTopModal>
						<StyledPokeball name={'pokeball'} css={{ size: '$208' }} />
						<StyledPokemonImage>
							<img
								src={
									pokemon?.sprites.other.dream_world.front_default ||
									pokemon?.sprites.other.home.front_default
								}
								alt={pokemon?.name}
							/>
						</StyledPokemonImage>
					</StyledTopModal>

					<StyledModalDescription>
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