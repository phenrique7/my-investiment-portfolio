import { MAX_QUESTIONS } from 'src/utils/constants';

export function isEmptyObject(object) {
  return (
    typeof object === 'object' && Object.values(object).length === 0
  );
}

export function getInitialInvestmentNumber(dataValue) {
  let value = dataValue;

  if (/\./.test(value)) {
    value = value.replace(/\./, '');
  }

  value = value.replace(/R\$\s/, '').replace(/,/, '.');

  return parseFloat(value);
}

export function getInitialInvestmentValueScore(value) {
  const initialInvestment = getInitialInvestmentNumber(value);

  if (initialInvestment <= 5000) {
    return 0;
  }

  if (initialInvestment > 5000 && initialInvestment <= 30000) {
    return 1;
  }

  if (initialInvestment > 30000 && initialInvestment <= 60000) {
    return 2;
  }

  return 3;
}

export function emailIsValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function initialAnswers() {
  return new Array(MAX_QUESTIONS).fill(null);
}
