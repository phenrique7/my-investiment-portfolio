export function isEmptyObject(object) {
  return (
    typeof object === 'object' && Object.values(object).length === 0
  );
}

export function getInitialInvestmentValueScore(value) {
  // Tratar value que vem em uma string formatada
  if (value <= 5000) {
    return 0;
  }
  if (value > 5000 && value <= 30000) {
    return 1;
  }
  if (value > 30000 && value <= 60000) {
    return 2;
  }
  return 3;
}
