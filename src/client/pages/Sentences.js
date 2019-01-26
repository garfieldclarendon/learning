import React from 'react';
import DoubleColumn from '../layout/DoubleColumn';

const Sentences = () => {
  return (
  <div>
    <DoubleColumn
      asideContent={
      (
        <div>
         PIC HERE
        </div>
      )
    }
      prevLink="intro"
      nextLink="syntax"
      title="Sentences of Programing"
    >
      <p>You've learned that in English we have rules we all follow in order to understand eachother. Programing is similar. Unlike humans though, computers can't ask you, "What did you mean?". This is why it's important what we tell a computer makes sense for it.</p>
      <p>Sentences in English are called Syntax in programing.</p>
    </DoubleColumn>
  </div>
)};

export default Sentences;
