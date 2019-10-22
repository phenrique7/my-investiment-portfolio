import React from 'react';

export default function useInputMutationObserver() {
  const [emptyTextField, setEmptyTextField] = React.useState(true);
  const [blurEvent, setBlurEvent] = React.useState(false);

  React.useEffect(() => {
    const mutationObserver = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if ('data-value' in mutation.target.attributes) {
          if (mutation.target.attributes['data-value'].textContent) {
            setEmptyTextField(false);
          } else {
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

  return { emptyTextField, blurEvent };
}
