import React from 'react';
import PropTypes from 'prop-types';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import useInputMask from 'src/hooks/useInputMask';
import { createNumberMask } from 'text-mask-addons';
import { Button } from 'src/components/button/Button';
import Icon from 'src/components/icon/Icon';
import useInputMutationObserver from 'src/hooks/useInputMutationObserver';

function FormMessage() {
  const { emptyTextField, blurEvent } = useInputMutationObserver();

  return emptyTextField && blurEvent ? (
    <p className="text-red-500 text-xs">
      Valor inicial não pode ficar vazio.
    </p>
  ) : null;
}

function SubmitButton() {
  const { emptyTextField } = useInputMutationObserver();

  return (
    <Button type="submit" disabled={emptyTextField}>
      Próximo
      <Icon reactIcon={MdArrowForward} className="ml-2" />
    </Button>
  );
}

export default function QuizInput({
  answer,
  previousStage,
  nextStage,
}) {
  const input = React.useRef(null);

  const maskMoney = createNumberMask({
    prefix: 'R$ ',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: '.',
    allowDecimal: true,
    integerLimit: 9,
    decimalSymbol: ',',
    requireDecimal: true,
  });

  const onChange = useInputMask({
    initialValue: answer || '',
    input,
    onChange: e => e.target.value,
    mask: value => {
      const mask = maskMoney(value);
      const decimalsRegex = /,([0-9]{1,2})/;
      const result = decimalsRegex.exec(value);

      if (!!result && result[1].length < 2) {
        mask.push('0');
      } else if (!result) {
        mask.push('00');
      }

      return mask;
    },
  });

  function handleBlur() {
    input.current.setAttribute('data-blurevent', true);
  }

  function handleChange(e) {
    input.current.setAttribute('data-blurevent', false);
    return onChange(e);
  }

  function handleSubmit(event) {
    event.preventDefault();
    nextStage(input.current.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          name="initial-investiment"
          type="text"
          ref={input}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Valor inicial"
          className={`
            w-full
            rounded
            border-2
            text-gray-700
            leading-tight
            py-2 pl-4 pr-4
            appearance-none
            focus:bg-white
            border-gray-300
            focus:outline-none
            focus:border-blue-500
          `}
        />
      </label>
      <FormMessage />
      <div className="flex justify-between mt-10">
        <Button onClick={previousStage} kind="outlined">
          <Icon reactIcon={MdArrowBack} className="mr-2" />
          Voltar
        </Button>
        <SubmitButton />
      </div>
    </form>
  );
}

QuizInput.defaultProps = {
  answer: null,
};

QuizInput.propTypes = {
  previousStage: PropTypes.func.isRequired,
  nextStage: PropTypes.func.isRequired,
  answer: PropTypes.string,
};
