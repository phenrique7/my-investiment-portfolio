import React from 'react';
import Router from 'next/router';
import PropTypes from 'prop-types';
import { Box } from 'reakit';
import { useRadioState, Radio, RadioGroup } from 'reakit/Radio';
import useInputMask from 'src/hooks/useInputMask';
import { createNumberMask } from 'text-mask-addons';
import Icon from 'src/components/icon/Icon';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import { Button } from 'src/components/button/Button';
import { useUser } from 'src/context/user-context';
import { setStorage } from 'src/utils/storage';
import { LS_USER_DATA_KEY } from 'src/utils/constants';
import questions from 'static/questions.json';

function QuizOptions({ stage, previousStage, nextStage }) {
  const radio = useRadioState();
  const { options } = questions[stage];

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form className="m-auto px-6 py-4" onSubmit={handleSubmit}>
      <RadioGroup
        aria-label="fruits"
        className="flex flex-col text-gray-700"
        {...radio}
      >
        {options.map(({ answer }) => (
          <label key={answer} className="py-2">
            <Radio
              value={answer}
              className="form-radio h-6 w-6 mr-5"
              {...radio}
            />
            {answer}
          </label>
        ))}
      </RadioGroup>
      <div className="flex justify-between mt-10">
        <Button onClick={previousStage} kind="outlined">
          <Icon reactIcon={MdArrowBack} className="mr-2" />
          Voltar
        </Button>
        <Button type="submit" disabled={radio.state === undefined}>
          Próximo
          <Icon reactIcon={MdArrowForward} className="ml-2" />
        </Button>
      </div>
    </form>
  );
}

QuizOptions.propTypes = {
  stage: PropTypes.number.isRequired,
  previousStage: PropTypes.func.isRequired,
  nextStage: PropTypes.func.isRequired,
};

function SubmitButtonCustomized() {
  const [buttonDisabled, setButtonDisabled] = React.useState(true);

  React.useEffect(() => {
    const mutationObserver = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.target.attributes['data-value'].textContent) {
          setButtonDisabled(false);
        } else {
          setButtonDisabled(true);
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

  return (
    <Button type="submit" disabled={buttonDisabled}>
      Próximo
      <Icon reactIcon={MdArrowForward} className="ml-2" />
    </Button>
  );
}

function QuizInput({ previousStage, nextStage }) {
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

  function handleSubmit(event) {
    event.preventDefault();
    console.log('input.current.value', input.current.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          name="initial-investiment"
          type="text"
          className="appearance-none border-2 border-gray-300 rounded w-full py-2 pl-4 pr-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
          ref={input}
          onChange={onChange}
          placeholder="valor inicial"
        />
      </label>
      <div className="flex justify-between mt-10">
        <Button onClick={previousStage} kind="outlined">
          <Icon reactIcon={MdArrowBack} className="mr-2" />
          Voltar
        </Button>
        <SubmitButtonCustomized />
      </div>
    </form>
  );
}

QuizInput.propTypes = {
  previousStage: PropTypes.func.isRequired,
  nextStage: PropTypes.func.isRequired,
};

export default function QuizForm() {
  const { user } = useUser();
  const [stage, setStage] = React.useState(0);
  const { quizStage } = user;

  React.useEffect(() => {
    if (quizStage > 0) {
      setStage(quizStage);
    }
  }, [quizStage]);

  function previousStage() {
    setStage(prevState => {
      const newState = prevState - 1;

      setStorage(
        LS_USER_DATA_KEY,
        {
          ...user,
          quizStage: newState,
        },
        true,
      );

      return newState;
    });
  }

  function nextStage() {
    setStage(prevState => {
      const newState = prevState + 1;

      setStorage(
        LS_USER_DATA_KEY,
        {
          ...user,
          quizStage: newState,
        },
        true,
      );

      return newState;
    });
  }

  const { question } = questions[stage];

  if (stage === 7) {
    Router.push('/resultado');
  }

  return (
    <Box className="h-screen">
      <Box className="flex h-full px-3 items-center">
        <Box className="w-full">
          <Box className="m-auto w-120 sm-max:w-auto">
            <Box className="px-6 py-4">
              <p className="text-gray-700 text-lg font-bold text-center">
                {question}
              </p>
            </Box>
            {stage === 0 ? (
              <QuizInput
                previousStage={previousStage}
                nextStage={nextStage}
              />
            ) : (
              <QuizOptions
                stage={stage}
                previousStage={previousStage}
                nextStage={nextStage}
              />
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
