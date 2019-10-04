import React from 'react';
import Router from 'next/router';
import { Box } from 'reakit';
import QuizInput from 'src/components/quiz-form/quiz-input/QuizInput';
import QuizOptions from 'src/components/quiz-form/quiz-options/QuizOptions';
import { useUser } from 'src/context/user-context';
import { setStorage, getStorage } from 'src/utils/storage';
import {
  LS_USER_DATA_KEY,
  MAX_QUESTIONS,
  FIRST_QUESTION,
} from 'src/utils/constants';
import questions from 'static/questions.json';

export default function QuizForm() {
  const { user, setUser } = useUser();
  const [stage, setStage] = React.useState(0);
  const [quiz, setQuiz] = React.useState({
    score: 0,
    answers: new Array(MAX_QUESTIONS).fill(null),
  });
  const { quizStage } = user;

  React.useEffect(() => {
    if (quizStage > 0) {
      const userDataStorage = getStorage(LS_USER_DATA_KEY);
      const userData = JSON.parse(userDataStorage);
      setQuiz(userData.quiz);
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

  function nextStage(answer, score) {
    setQuiz(prevState => {
      const newAnswers = prevState.answers.map((value, index) =>
        index === stage ? answer : value,
      );

      const newState = {
        score: prevState.score + score,
        answers: newAnswers,
      };

      setStorage(
        LS_USER_DATA_KEY,
        {
          ...user,
          quiz: newState,
        },
        true,
      );

      return newState;
    });

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

  if (stage === MAX_QUESTIONS) {
    setUser(prevState => ({ ...prevState, finalScore: quiz.score }));
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
            {stage === FIRST_QUESTION ? (
              <QuizInput
                answer={quiz[FIRST_QUESTION]}
                previousStage={previousStage}
                nextStage={nextStage}
              />
            ) : (
              <QuizOptions
                stage={stage}
                previousStage={previousStage}
                nextStage={nextStage}
                quiz={quiz}
              />
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
