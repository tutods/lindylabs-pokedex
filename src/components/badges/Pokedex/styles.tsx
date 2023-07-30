import { styled } from 'styles/stitches';

const BadgeBackground = styled('span', {
  width: 'max-content',

  display: 'inline-flex',
  alignItems: 'center',
  gap: '$8',

  padding: '$space$4 $space$18 $space$4 $space$6',
  borderRadius: '$244',

  backgroundColor: '$white',
  color: '$blue',

  fontSize: '$14',
  textTransform: 'capitalize',
});

const IconContainer = styled('span', {
  size: '$26',

  padding: '$4',
  borderRadius: '$full',

  displayInlineFlex: 'row',
  alignItems: 'center',

  backgroundColor: 'rgba(63, 103, 186, 0.15)',
});

export { BadgeBackground, IconContainer };
