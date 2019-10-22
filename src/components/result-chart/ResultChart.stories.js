import React from 'react';
import { storiesOf } from '@storybook/react';
import ResultChart from 'src/components/result-chart/ResultChart';

const data = [
  {
    id: 'rust',
    label: 'rust',
    value: 293,
    color: 'hsl(350, 70%, 50%)',
  },
  {
    id: 'ruby',
    label: 'ruby',
    value: 285,
    color: 'hsl(87, 70%, 50%)',
  },
  {
    id: 'elixir',
    label: 'elixir',
    value: 122,
    color: 'hsl(62, 70%, 50%)',
  },
  {
    id: 'make',
    label: 'make',
    value: 413,
    color: 'hsl(138, 70%, 50%)',
  },
  {
    id: 'javascript',
    label: 'javascript',
    value: 458,
    color: 'hsl(220, 70%, 50%)',
  },
];

storiesOf('Result Chart', module).add('default', () => (
  <div className="p-4 w-108 h-108">
    <ResultChart data={data} />
  </div>
));
