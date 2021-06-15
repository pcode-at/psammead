import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import VisuallyHiddenText from '@bbc/psammead-visually-hidden-text';
import notes from '../README.md';
import Copyright from './index';

storiesOf('Components/Copyright', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    () => {
      const position = select('Position', ['left', 'right'], 'left');
      return (
        <Copyright position={position}>
          {text('copyright', 'Getty Images')}
        </Copyright>
      );
    },
    {
      notes,
      knobs: { escapeHTML: false },
      creevey: {
        skip: { reason: 'avoid cannot take screenshot with 0 height error ' },
      },
    },
  )
  .add(
    'with visually hidden text',
    () => {
      const position = select('Position', ['left', 'right'], 'left');
      return (
        <Copyright position={position}>
          <VisuallyHiddenText>
            {text('visually hidden text', 'Image source, ')}
          </VisuallyHiddenText>
          {text('copyright', 'Getty Images')}
        </Copyright>
      );
    },
    {
      notes,
      knobs: { escapeHTML: false },
      creevey: {
        skip: { reason: 'avoid cannot take screenshot with 0 height error ' },
      },
    },
  );
