import React from 'react';
import { storiesOf } from '@storybook/react';
import QuizInput from 'src/components/quiz-form/quiz-input/QuizInput';

storiesOf('Quiz Input', module).add('default', () => (
  <div className="p-4">
    <QuizInput previousStage={() => {}} nextStage={() => {}} />
  </div>
));
