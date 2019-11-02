import React from 'react';

export default function useRadio(initialState) {
  const [radioState, setRadioState] = React.useState(null);

  React.useEffect(() => {
    if (initialState) {
      setRadioState(initialState);
    }
  }, [initialState]);

  function handleChange(event) {
    setRadioState(event.target.value);
  }

  return { radioState, handleChange };
}
