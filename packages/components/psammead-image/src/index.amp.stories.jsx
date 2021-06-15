import AmpImg from './index.amp';
import { stories } from './testHelpers/stories';
import { ampDecorator } from '../../../../.storybook/preview';

const additionalProps = {
  layout: 'responsive',
  creevey: {
    skip: { reason: 'avoid cannot take screenshot with 0 height error ' },
  },
};

stories(
  AmpImg,
  'Components/Images/Image - AmpImg',
  true,
  additionalProps,
  ampDecorator,
);
