import React from 'react';

export default function useInputMutationObserver() {
  const [inputNumber, setInputNumber] = React.useState(0);
  const [dataValue, setDataValue] = React.useState('');
  const [emptyTextField, setEmptyTextField] = React.useState(true);
  const [blurEvent, setBlurEvent] = React.useState(false);

  React.useEffect(() => {
    if (dataValue) {
      const value = dataValue.replace(/R\$\s/, '').replace(/,/, '.');
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
