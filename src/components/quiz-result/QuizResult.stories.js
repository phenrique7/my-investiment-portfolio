import React from 'react';
import { storiesOf } from '@storybook/react';
import QuizResult from 'src/components/quiz-result/QuizResult';
import { UserProvider } from 'src/context/user-context';

storiesOf('Quiz Result', module).add('default', () => (
  <UserProvider>
    <div className="p-4">
      <QuizResult />
    </div>
  </UserProvider>
));
