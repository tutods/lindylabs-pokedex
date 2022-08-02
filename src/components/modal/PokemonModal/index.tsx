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

	// if (!pokemonModal.pokemon) {
	// 	setPokemonModal((prev) => ({ ...prev, isOpen: false }));
	// }

	const handleOpenModal = (isOpen: boolean) =>
		setPokemonModal((prevState) => ({
			...prevState,
			isOpen
		}));

	return (
		<Dialog.Root open={pokemonModal.isOpen} onOpenChange={handleOpenModal}>
			<Dialog.Portal>
				<StyledModalOverlay />
				<StyledModalContent type={pokemonModal.pokemon?.types[0].type.name}>
					<StyledModalTitle>
						<div>
							<Dialog.Close asChild>
								<Icon name="arrow-left" />
							</Dialog.Close>
							<h3>{pokemonModal.pokemon?.name}</h3>
						</div>
						<span>#001</span>
					</StyledModalTitle>

					<StyledTopModal>
						<StyledPokeball name={'pokeball'} css={{ size: '$208' }} />
						<StyledPokemonImage>
							<img
								src={pokemonModal.pokemon?.sprites.other.dream_world.front_default}
								alt={pokemonModal.pokemon?.name}
							/>
						</StyledPokemonImage>
					</StyledTopModal>

					<StyledModalDescription>
						<div>
							{pokemonModal.pokemon?.types.map((pokemonType) => (
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
									{pokemonModal.pokemon?.weight} kg
								</span>
								<span>Weight</span>
							</div>
							<div>
								<span>
									<Icon name={'rule'} />
									{pokemonModal.pokemon?.height} m
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