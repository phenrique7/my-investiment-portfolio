import React from 'react';
import Providers from 'src/context/Providers';
import CustomerEntryData from 'src/components/entry-data/EntryData';
import Quiz from 'src/components/quiz/Quiz';
import Result from 'src/components/result/Result';

export default function CustomerProfile() {
  const [stage, setStage] = React.useState(0);

  function previousStage() {
    setStage(prevStage => prevStage - 1);
  }

  function nextStage() {
    setStage(prevStage => prevStage + 1);
  }

  function renderView() {
    if (stage === 0) {
      return <CustomerEntryData nextStage={nextStage} />;
    }

    if (stage >= 1 && stage <= 7) {
      return (
        <Quiz
          stage={stage}
          previousStage={previousStage}
          nextStage={nextStage}
        />
      );
    }

    if (stage === 8) {
      return <Result />;
    }

    return null;
  }

  return <Providers>{renderView()}</Providers>;
}