import { styled } from 'styles/stitches';

const IconContainer = styled('span', {
  size: '$32',

  displayInlineFlex: 'row',
  alignItems: 'center',
  justifyContent: 'center',

  px: '$6',
  py: '$6',
  borderRadius: '$full',

  color: '$white',

  svg: {
    width: '100%',
  },

  variants: {
    type: {
      bug: {
        backgroundColor: '$bug',
      },
      dark: {
        backgroundColor: '$dark',
      },
      dragon: {
        backgroundColor: '$dragon',
      },
      electric: {
        backgroundColor: '$electric',
        color: '$dark',
      },
      fairy: {
        backgroundColor: '$fairy',
      },
      fighting: {
        backgroundColor: '$fighting',
      },
      fire: {
        backgroundColor: '$fire',
      },
      flying: {
        backgroundColor: '$flying',
      },
      ghost: {
        backgroundColor: '$ghost',
      },
      grass: {
        backgroundColor: '$grass',
      },
      ground: {
        backgroundColor: '$ground',
      },
      ice: {
        backgroundColor: '$ice',
      },
      normal: {
        backgroundColor: '$normal',
      },
      poison: {
        backgroundColor: '$poison',
      },
      psychic: {
        backgroundColor: '$psychic',
      },
      rock: {
        backgroundColor: '$rock',
      },
      steel: {
        backgroundColor: '$steel',
      },
      water: {
        backgroundColor: '$water',
      },
    },
  },
});
export { IconContainer };
