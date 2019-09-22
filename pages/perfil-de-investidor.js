import React from 'react';
import Providers from 'src/context/Providers';
import CustomerEntryData from 'src/components/customer-entry-data/CustomerEntryData';
import Quiz from 'src/components/quiz/Quiz';
import Result from 'src/components/result/Result';

export default function CustomerProfile() {
  const [stage, setStage] = React.useState(0);

  function nextStage() {
    setStage(prevStage => prevStage + 1);
  }

  return (
    <Providers>
      {(() => {
        switch (stage) {
          case 0:
            return <CustomerEntryData nextStage={nextStage} />;
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
            return <Quiz stage={stage} nextStage={nextStage} />;
          case 7:
            return <Result />;
          default:
            return null;
        }
      })()}
    </Providers>
  );
}
