import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './Button';

storiesOf('Button', module)
  .add('primary', () => (
    <div
      style={{
        padding: '10px',
        display: 'flex',
        width: '350px',
        justifyContent: 'space-between',
      }}
    >
      <Button onClick={action('clicked')}>Primary</Button>
      <Button onClick={action('clicked')} kind="default">
        Default
      </Button>
      <Button onClick={action('clicked')} roundedFull>
        Secondary
      </Button>
    </div>
  ))
  .add('secondary', () => (
    <Button onClick={action('clicked')}>Secondary</Button>
  ));
