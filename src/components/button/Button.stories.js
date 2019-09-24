import React from 'react';
import { storiesOf } from '@storybook/react';
import { MdArrowForward } from 'react-icons/md';
import { Button } from 'src/components/button/Button';
import Icon from 'src/components/icon/Icon';

const Decorator = storyFn => (
  <div
    style={{
      padding: '10px',
      display: 'flex',
      width: '350px',
      justifyContent: 'space-between',
    }}
  >
    {storyFn()}
  </div>
);

storiesOf('Button', module)
  .addDecorator(Decorator)
  .add('primary', () => (
    <>
      <Button>Primary</Button>
      <Button kind="default">Default</Button>
      <Button roundedFull>Secondary</Button>
    </>
  ))
  .add('with icon', () => (
    <Button>
      Button with icon
      <Icon reactIcon={MdArrowForward} className="ml-2" />
    </Button>
  ));
