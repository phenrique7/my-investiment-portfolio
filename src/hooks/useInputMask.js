import React from 'react';

const { createTextMaskInputElement } = require('text-mask-core');

function useInputMask({
  guide,
  input: inputRef,
  keepCharPositions,
  mask,
  onChange,
  pipe,
  placeholderChar,
  showMask,
  initialValue = '',
}) {
  const textMaskRef = React.useRef(null);

  React.useEffect(() => {
    const input = document.querySelector(
      'input[name="initial-investiment"]',
    );

    input.setAttribute('data-value', initialValue);
  }, [initialValue]);

  React.useEffect(() => {
    if (!inputRef.current) {
      return;
    }

    textMaskRef.current = createTextMaskInputElement({
      guide,
      inputElement: inputRef.current,
      keepCharPositions,
      mask,
      pipe,
      placeholderChar,
      showMask,
    });

    textMaskRef.current.update(initialValue);
  }, [
    inputRef,
    guide,
    keepCharPositions,
    mask,
    pipe,
    placeholderChar,
    showMask,
    initialValue,
  ]);

  return event => {
    if (textMaskRef.current) {
      textMaskRef.current.update();
      inputRef.current.setAttribute(
        'data-value',
        textMaskRef.current.state.previousConformedValue,
      );
    }

    if (typeof onChange === 'function') {
      onChange(event);
    }
  };
}

export default useInputMask;
