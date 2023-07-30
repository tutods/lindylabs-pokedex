import { Container } from 'components/Container';

import { styled } from 'styles/stitches';

const Section = styled('section', {
  position: 'relative',

  height: '$720',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  backgroundImage: `url(/imgs/bg-red.svg)`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',

  img: {
    height: '$220',

    position: 'absolute',
    bottom: '-5%',
    left: '50%',
    transform: 'translateX(-50%)',
  },
});

const HeroContainer = styled(Container, {
  position: 'relative',

  displayFlex: 'row',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  textAlign: 'center',

  h1: {
    mt: '$29',
    mb: '$8',
    color: '$white',
  },

  p: {
    fontSize: '$18',
    color: '$white',
  },
});

const StyledExploreBtn = styled('button', {
  position: 'absolute',
  bottom: 0,
  left: 0,

  displayFlex: 'column',
  gap: '$30',
  alignItems: 'center',
  justifyContent: 'center',

  cursor: 'pointer',

  span: {
    '&:nth-of-type(1)': {
      color: '$white',

      fontSize: '$14px',
      transform: 'rotate(-90deg)',
    },

    '&:nth-of-type(2)': {
      size: '$40',

      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',

      borderRadius: '$full',

      backgroundColor: '$redLightest',
      transition: 'background-color .3s ease-in',
    },
  },

  '&:hover': {
    'span:nth-of-type(2)': {
      backgroundColor: '$redDarkest',
    },
  },
});

export { HeroContainer, Section, StyledExploreBtn };
