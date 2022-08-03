import Icon from 'components/icons/Icon';
import { PokemonTypeEnum } from 'shared/enum/PokemonType.enum';
import { FilterContainer, FilterItem } from './style';
import { CSSProps } from 'shared/@types/Stitches';

type Props = CSSProps & {
	callback: (filter: 'all' | PokemonTypeEnum) => void;
	currentFilter: string;
};

const PokemonTypeFilter = ({ callback, currentFilter, css, ...props }: Props) => {
	return (
		<FilterContainer css={css} {...props}>
			<FilterItem active={currentFilter === 'all'} onClick={() => callback('all')}>
				<Icon size={24} name={'pokeball'} />
				<span>All</span>
			</FilterItem>

			{Object.values(PokemonTypeEnum).map((type) => (
				<FilterItem
					key={type}
					active={currentFilter === type}
					onClick={() => callback(type)}
				>
					<span>
						<Icon name={`${type}-type`} />
					</span>
					<span>{type}</span>
				</FilterItem>
			))}
		</FilterContainer>
	);
};

export { PokemonTypeFilter };