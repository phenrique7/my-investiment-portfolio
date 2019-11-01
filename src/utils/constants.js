export const LS_USER_DATA_KEY = '__mci_user_data__';
export const MAX_QUESTIONS = 6;
export const FIRST_QUESTION = 1;
export const CONSERVATIVE_PROFILE_LIMIT = 6;
export const AGRESSIVE_PROFILE_LIMIT = 13;

export const CONSERVATIVE_PROFILE_DATA = {
  colors: [
    '#42a5f5',
    '#f47560',
    '#f1e15b',
    '#e8a838',
    '#ba68c8',
    '#26a69a',
  ],
  data: [
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
      value: 35,
    },
    {
      id: 'Fundos Multimercados',
      label: 'Fundos Multimercados',
      value: 15,
    },
    {
      id: 'Fundos de Ações',
      label: 'Fundos de Ações',
      value: 10,
    },
  ],
  fill: [
    {
      match: {
        id: 'Fundos de Ações',
      },
      id: 'lines',
    },
    {
      match: {
        id: 'Fundos Multimercados',
      },
      id: 'lines',
    },
  ],
};

export const MODERATE_PROFILE_DATA = {
  colors: [
    '#42a5f5',
    '#f47560',
    '#f1e15b',
    '#e8a838',
    '#bdbdbd',
    '#ba68c8',
    '#26a69a',
  ],
  data: [
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
      value: 15,
    },
    {
      id: 'Fundos Imobiliários',
      label: 'Fundos Imobiliários',
      value: 10,
    },
    {
      id: 'Fundos Multimercados',
      label: 'Fundos Multimercados',
      value: 15,
    },
    {
      id: 'Ações',
      label: 'Ações',
      value: 30,
    },
  ],
  fill: [
    {
      match: {
        id: 'Ações',
      },
      id: 'dots',
    },
    {
      match: {
        id: 'Fundos Imobiliários',
      },
      id: 'lines',
    },
    {
      match: {
        id: 'Fundos Multimercados',
      },
      id: 'lines',
    },
  ],
};

export const AGRESSIVE_PROFILE_DATA = {
  colors: [
    '#42a5f5',
    '#f47560',
    '#f1e15b',
    '#e8a838',
    '#ba68c8',
    '#bdbdbd',
    '#26a69a',
  ],
  data: [
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
      id: 'Fundos de Renda Fixa',
      label: 'Fundos de Renda Fixa',
      value: 5,
    },
    {
      id: 'Fundos Multimercados',
      label: 'Fundos Multimercados',
      value: 10,
    },
    {
      id: 'Fundos Imobiliários',
      label: 'Fundos Imobiliários',
      value: 10,
    },
    {
      id: 'Ações e B3',
      label: 'Ações e B3',
      value: 45,
    },
  ],
  fill: [
    {
      match: {
        id: 'Ações e B3',
      },
      id: 'dots',
    },
    {
      match: {
        id: 'Fundos de Renda Fixa',
      },
      id: 'lines',
    },
    {
      match: {
        id: 'Fundos Multimercados',
      },
      id: 'lines',
    },
    {
      match: {
        id: 'Fundos Imobiliários',
      },
      id: 'lines',
    },
  ],
};
