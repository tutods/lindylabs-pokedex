import type { PropertyValue } from '@stitches/react';

const utils = {
  py: (value: PropertyValue<'padding'>) => ({
    paddingTop: value,
    paddingBottom: value,
  }),
  px: (value: PropertyValue<'padding'>) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  my: (value: PropertyValue<'margin'>) => ({
    marginTop: value,
    marginBottom: value,
  }),
  mx: (value: PropertyValue<'margin'>) => ({
    marginLeft: value,
    marginRight: value,
  }),
  mb: (value: PropertyValue<'marginBottom'>) => ({
    marginBottom: value,
  }),
  mt: (value: PropertyValue<'marginTop'>) => ({
    marginTop: value,
  }),
  pt: (value: PropertyValue<'paddingTop'>) => ({
    paddingTop: value,
  }),
  pb: (value: PropertyValue<'paddingBottom'>) => ({
    paddingBottom: value,
  }),
  size: (value: PropertyValue<'width'>) => ({
    width: value,
    height: value,
  }),
  displayInlineFlex: (direction: 'row' | 'column') => ({
    display: 'inline-flex',
    flexDirection: direction,
  }),
  displayFlex: (direction: 'row' | 'column') => ({
    display: 'flex',
    flexDirection: direction,
  }),
  displayGrid: (columns: PropertyValue<'gridTemplateColumns'>) => ({
    display: 'grid',
    gridTemplateColumns: columns,
  }),
};

export { utils };
