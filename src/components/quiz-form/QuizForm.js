import React from 'react';
import Router from 'next/router';
import PropTypes from 'prop-types';
import { Box } from 'reakit';
import { useRadioState, Radio, RadioGroup } from 'reakit/Radio';
import Icon from 'src/components/icon/Icon';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import { Button } from 'src/components/button/Button';
import { useUser } from 'src/context/user-context';
import { setStorage } from 'src/utils/storage';
import { LS_USER_DATA_KEY } from 'src/utils/constants';

function Form({ previousStage, nextStage }) {
  const radio = useRadioState();

  return (
    <form className="m-auto px-6 py-4">
      <RadioGroup
        aria-label="fruits"
        className="flex flex-col text-gray-700"
        {...radio}
      >
        <label className="py-2">
          <Radio
            value="apple"
            className="form-radio h-6 w-6 mr-5"
            {...radio}
          />
          apple
        </label>
        <label className="py-2">
          <Radio
            value="orange"
            className="form-radio h-6 w-6 mr-5"
            {...radio}
          />
          orange
        </label>
        <label className="py-2">
          <Radio
            value="watermelon"
            className="form-radio h-6 w-6 mr-5"
            {...radio}
          />
          watermelon
        </label>
      </RadioGroup>
      <div className="flex justify-between mt-10">
        <Button type="submit" onClick={previousStage} kind="outlined">
          <Icon reactIcon={MdArrowBack} className="mr-2" />
          Voltar
        </Button>
        <Button type="submit" onClick={nextStage}>
          Próximo
          <Icon reactIcon={MdArrowForward} className="ml-2" />
        </Button>
      </div>
    </form>
  );
}

Form.propTypes = {
  stage: PropTypes.number.isRequired,
  previousStage: PropTypes.func.isRequired,
  nextStage: PropTypes.func.isRequired,
};

export default function QuizForm() {
  const { user } = useUser();
  const [stage, setStage] = React.useState(0);
  const { name, quizStage } = user;

  React.useEffect(() => {
    if (name) {
      if (quizStage > 0) {
        setStage(quizStage);
      }
    } else {
      Router.push('/');
    }
  }, [name, quizStage]);

  function previousStage() {
    setStage(prevState => {
      const newState = prevState - 1;

      setStorage(LS_USER_DATA_KEY, {
        ...user,
        quizStage: newState,
      });

      return newState;
    });
  }

  function nextStage() {
    setStage(prevState => {
      const newState = prevState + 1;

      setStorage(LS_USER_DATA_KEY, {
        ...user,
        quizStage: newState,
      });

      return newState;
    });
  }

  return (
    <Box className="h-screen">
      <Box className="flex h-full px-3 items-center">
        <Box className="w-full">
          <Box className="m-auto w-120 sm-max:w-auto">
            <Box className="px-6 py-4">
              <p className="text-gray-700 text-lg font-bold text-center">
                {stage === 0 && (
                  <>
                    Olá, {name}
                    <img
                      draggable="false"
                      className="w-5 inline mx-2"
                      alt="👋"
                      src="https://s.w.org/images/core/emoji/11/svg/1f44b.svg"
                    />
                    Preciso fazer algumas poucas perguntas. De
                    antemão,
                  </>
                )}
                Pergunta:
              </p>
            </Box>
            <Form
              stage={stage}
              previousStage={previousStage}
              nextStage={nextStage}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
