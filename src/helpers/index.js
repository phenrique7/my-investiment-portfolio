export function isEmptyObject(object) {
  return (
    typeof object === 'object' && Object.values(object).length === 0
  );
}
