import React from 'react';
import Router from 'next/router';
import { Box } from 'reakit';
import QuizInput from 'src/components/quiz-form/quiz-input/QuizInput';
import QuizOptions from 'src/components/quiz-form/quiz-options/QuizOptions';
import { useUser } from 'src/context/user-context';
import { setStorage, getStorage } from 'src/utils/storage';
import { getInitialInvestmentValueScore } from 'src/helpers';
import questions from 'public/static/questions.json';
import {
  LS_USER_DATA_KEY,
  MAX_QUESTIONS,
  FIRST_QUESTION,
} from 'src/utils/constants';

export default function QuizForm() {
  const { user } = useUser();
  const [stage, setStage] = React.useState(0);
  const [quizAnswers, setQuizAnswers] = React.useState(() =>
    new Array(MAX_QUESTIONS).fill(null),
  );

  React.useEffect(() => {
    if (user.quizStage > 0) {
      const userDataStorage = getStorage(LS_USER_DATA_KEY);
      const userData = JSON.parse(userDataStorage);
      setQuizAnswers(userData.quizAnswers);
      setStage(user.quizStage);
    }
  }, [user.quizStage]);

  function calculateQuizScore() {
    return questions.reduce((accumulator, question, index) => {
      if (index) {
        const { score } = question.options.find(
          ({ answer }) => quizAnswers[index] === answer,
        );
        return accumulator + score;
      }
      return getInitialInvestmentValueScore(quizAnswers[index]);
    }, 0);
  }

  function goToResult(quizScore) {
    Router.push({
      pathname: '/resultado',
      query: { quizScore },
    });
  }

  function getNewAnswers(action, answer) {
    const newAnswer = action === 'prev' ? null : answer;
    const currentAnswers = quizAnswers.map((value, index) =>
      index === stage ? newAnswer : value,
    );

    setQuizAnswers(currentAnswers);

    return currentAnswers;
  }

  function previousStage() {
    const newAnswers = getNewAnswers('prev');

    setStage(prevState => {
      const newState = prevState - 1;

      setStorage(
        LS_USER_DATA_KEY,
        {
          ...user,
          quizAnswers: newAnswers,
          quizStage: newState,
        },
        true,
      );

      return newState;
    });
  }

  function nextStage(answer) {
    const newAnswers = getNewAnswers('next', answer);

    setStage(prevState => {
      const newState = prevState + 1;

      setStorage(
        LS_USER_DATA_KEY,
        {
          ...user,
          quizAnswers: newAnswers,
          quizStage: newState,
        },
        true,
      );

      return newState;
    });
  }

  if (stage === MAX_QUESTIONS) {
    const score = calculateQuizScore();
    goToResult(score);
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
            {stage === FIRST_QUESTION ? (
              <QuizInput
                answer={quizAnswers[FIRST_QUESTION]}
                previousStage={previousStage}
                nextStage={nextStage}
              />
            ) : (
              <QuizOptions
                stage={stage}
                previousStage={previousStage}
                nextStage={nextStage}
                quizAnswers={quizAnswers}
              />
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
