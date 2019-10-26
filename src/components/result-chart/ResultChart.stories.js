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
    id: 'Controle de Finanças',
    label: 'Controle de Finanças',
    value: 10,
  },
  {
    id: 'Ativos de Renda Fixa',
    label: 'Ativos de Renda Fixa',
    value: 30,
  },
  {
    id: 'Fundos multimercados',
    label: 'Fundos multimercados',
    value: 20,
  },
  {
    id: 'Ativos de Renda Variável',
    label: 'Ativos de Renda Variável',
    value: 10,
  },
];

storiesOf('Result Chart', module).add('default', () => (
  <div className="w-192 h-120 m-auto">
    <ResultChart data={data} />
  </div>
));
