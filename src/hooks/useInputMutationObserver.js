import React from 'react';
import { getInitialInvestmentNumber } from 'src/helpers';

export default function useInputMutationObserver() {
  const [inputNumber, setInputNumber] = React.useState(0);
  const [dataValue, setDataValue] = React.useState('');
  const [emptyTextField, setEmptyTextField] = React.useState(true);
  const [blurEvent, setBlurEvent] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      const input = document.querySelector(
        'input[name="initial-investiment"]',
      );

      if (input) {
        const { textContent } = input.attributes['data-value'];
        setDataValue(textContent);
      }
    }, 0);
  }, []);

  React.useEffect(() => {
    if (dataValue) {
      const value = getInitialInvestmentNumber(dataValue);
      setInputNumber(parseFloat(value));
    }
  }, [dataValue]);

  React.useEffect(() => {
    const mutationObserver = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if ('data-value' in mutation.target.attributes) {
          const { textContent } = mutation.target.attributes[
            'data-value'
          ];

          if (textContent) {
            setDataValue(textContent);
            setEmptyTextField(false);
          } else {
            setDataValue('');
            setEmptyTextField(true);
          }
        }
        if ('data-blurevent' in mutation.target.attributes) {
          if (
            mutation.target.attributes['data-blurevent']
              .textContent === 'true'
          ) {
            setBlurEvent(true);
          } else {
            setBlurEvent(false);
          }
        }
      });
    });

    mutationObserver.observe(
      document.querySelector('input[name="initial-investiment"]'),
      {
        attributes: true,
        characterData: true,
        childList: false,
        subtree: false,
        attributeOldValue: false,
        characterDataOldValue: false,
      },
    );

    return () => {
      mutationObserver.disconnect();
    };
  });

  return { emptyTextField, blurEvent, inputNumber };
}
