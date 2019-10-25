export function isEmptyObject(object) {
  return (
    typeof object === 'object' && Object.values(object).length === 0
  );
}

export function getInitialInvestmentNumber(dataValue) {
  return dataValue.replace(/R\$\s/, '').replace(/,/, '.');
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
