import React from 'react';
import { storiesOf } from '@storybook/react';
import ResultChart from 'src/components/result-chart/ResultChart';

const data = [
  {
    id: 'Previdência Privada',
    label: 'Previdência Privada',
    value: 5,
  },
  {
    id: 'Reserva de Emergência',
    label: 'Reserva de Emergência',
    value: 15,
  },
  {
    id: 'elixir',
    label: 'elixir',
    value: 25,
  },
  {
    id: 'make',
    label: 'make',
    value: 20,
  },
  {
    id: 'javascript',
    label: 'javascript',
    value: 30,
  },
];

storiesOf('Result Chart', module).add('default', () => (
  <div className="w-156 h-120 m-auto">
    <ResultChart data={data} />
  </div>
));
