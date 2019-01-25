import React from 'react';
import DoubleColumn from '../layout/DoubleColumn';

const Syntax = () => {
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
      nextLink="warmingup1"
      title="Syntax"
    >
      <p>Syntax is a fancy word that means structure of words and punctuation in code to produce something a computer can understand.</p>
    </DoubleColumn>
  </div>
)};

export default Syntax;
