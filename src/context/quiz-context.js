import React from 'react';
import Router from 'next/router';
import PropTypes from 'prop-types';
import { useUser } from 'src/context/user-context';
import { setStorage, getStorage } from 'src/utils/storage';
import { MAX_QUESTIONS, LS_USER_DATA_KEY } from 'src/utils/constants';
import questions from 'public/static/questions.json';
import {
  getInitialInvestmentValueScore,
  initialAnswers,
} from 'src/helpers';

const QuizContext = React.createContext();

function QuizProvider({ children }) {
  const { user } = useUser();
  const [answers, setAnswers] = React.useState(initialAnswers);

  React.useEffect(() => {
    const userDataStorage = getStorage(LS_USER_DATA_KEY);

    if (userDataStorage) {
      const userData = JSON.parse(userDataStorage);
      setAnswers(userData.quizAnswers);
    }
  }, []);

  function calculateQuizScore(quizAnswers) {
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

  function getNewAnswers(question, answer) {
    const currentAnswers = answers.map((value, index) =>
      index === question - 1 ? answer : value,
    );

    setAnswers(currentAnswers);

    return currentAnswers;
  }

  function previousQuestion(question) {
    Router.push(`/questionario?question=${question - 1}`);
  }

  function nextQuestion(question, answer) {
    const newAnswers = getNewAnswers(question, answer);

    setStorage(
      LS_USER_DATA_KEY,
      {
        ...user,
        quizAnswers: newAnswers,
      },
      true,
    );

    if (question === MAX_QUESTIONS) {
      const score = calculateQuizScore(newAnswers);
      goToResult(score);
    } else {
      Router.push(`/questionario?question=${question + 1}`);
    }
  }

  function resetProgress() {
    setAnswers(initialAnswers);
  }

  return (
    <QuizContext.Provider
      value={{
        answers,
        previousQuestion,
        nextQuestion,
        resetProgress,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const context = React.useContext(QuizContext);

  if (context === undefined) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }

  return context;
}

QuizProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { QuizProvider, useQuiz };
