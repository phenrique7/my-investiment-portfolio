import React from 'react';
import Router from 'next/router';
import PropTypes from 'prop-types';
import { Box } from 'reakit';
import { useRadioState, Radio, RadioGroup } from 'reakit/Radio';
import {
  unstable_useFormState as useFormState,
  unstable_Form as Form,
  unstable_FormInput as FormInput,
  unstable_FormMessage as FormMessage,
} from 'reakit/Form';
import Icon from 'src/components/icon/Icon';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import { Button } from 'src/components/button/Button';
import { useUser } from 'src/context/user-context';
import { setStorage } from 'src/utils/storage';
import { LS_USER_DATA_KEY } from 'src/utils/constants';
import questions from 'static/questions.json';
import { isEmptyObject } from 'src/helpers';

function FormOptions({ stage, previousStage, nextStage }) {
  const radio = useRadioState();
  // const form = useFormState({
  //   values: { initialInvestiment: '' },
  //   onValidate: values => {
  //     if (!values.initialInvestiment) {
  //       const errors = {
  //         initialInvestiment:
  //           'Não esqueça de inserir sua quantia inicial de investimento',
  //       };
  //       throw errors;
  //     }
  //   },
  //   onSubmit: values => {
  //     nextStage();
  //   },
  // });

  const { options } = questions[stage];

  return (
    <form className="m-auto px-6 py-4">
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
        <Button type="submit">
          Próximo
          <Icon reactIcon={MdArrowForward} className="ml-2" />
        </Button>
      </div>
    </form>
  );
}

FormOptions.propTypes = {
  stage: PropTypes.number.isRequired,
  previousStage: PropTypes.func.isRequired,
  nextStage: PropTypes.func.isRequired,
};

function FormInputField({ previousStage, nextStage }) {
  const form = useFormState({
    values: { initialInvestiment: '' },
    onValidate: values => {
      if (!values.initialInvestiment) {
        const errors = {
          initialInvestiment:
            'Não esqueça de inserir sua quantia inicial de investimento',
        };
        throw errors;
      }
    },
    onSubmit: values => {
      nextStage();
    },
  });

  const validForm =
    isEmptyObject(form.errors) && form.values.initialInvestiment;

  return (
    <Form className="relative" {...form}>
      <FormInput
        name="initialInvestiment"
        type="text"
        className="appearance-none border-2 border-gray-200 rounded w-full py-2 pl-12 pr-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
        {...form}
      />
      <span
        className="absolute text-gray-500"
        style={{ top: '0.5rem', left: '1rem' }}
      >
        R${' '}
      </span>
      <FormMessage
        name="initialInvestiment"
        className="text-red-500 text-xs"
        {...form}
      />
      <div className="flex justify-between mt-10">
        <Button onClick={previousStage} kind="outlined">
          <Icon reactIcon={MdArrowBack} className="mr-2" />
          Voltar
        </Button>
        <Button type="submit" disabled={!validForm}>
          Próximo
          <Icon reactIcon={MdArrowForward} className="ml-2" />
        </Button>
      </div>
    </Form>
  );
}

FormInputField.propTypes = {
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
              <FormInputField
                previousStage={previousStage}
                nextStage={nextStage}
              />
            ) : (
              <FormOptions
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
