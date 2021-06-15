import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withServicesKnob } from '@bbc/psammead-storybook-helpers';
import notes from '../README.md';
import VisuallyHiddenText from './index';

storiesOf('Components/VisuallyHiddenText', module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob())
  .addParameters({
    creevey: {
      skip: { reason: 'avoid cannot take screenshot with 0 height error ' },
    },
  })
  .add(
    'default',
    ({ text, service }) => (
      <VisuallyHiddenText>
        {service === 'news' ? 'Visually hidden text' : text}
      </VisuallyHiddenText>
    ),
    { notes, knobs: { escapeHTML: false } },
  );
