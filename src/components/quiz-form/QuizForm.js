import React from 'react';
import Router from 'next/router';
import { Box } from 'reakit';
import QuizInput from 'src/components/quiz-form/quiz-input/QuizInput';
import QuizOptions from 'src/components/quiz-form/QuizOptions';
import { useUser } from 'src/context/user-context';
import { setStorage } from 'src/utils/storage';
import { LS_USER_DATA_KEY } from 'src/utils/constants';
import questions from 'static/questions.json';

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

  if (stage === 7) {
    Router.push('/resultado');
    return null;
  }

  const { question } = questions[stage];

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
