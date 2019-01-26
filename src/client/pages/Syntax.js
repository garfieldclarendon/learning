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
      prevLink="sentencesofprograming"
      nextLink="warmingup1"
      title="Syntax"
    >
      <p>Syntax is a fancy word that means structure of words and punctuation in code to produce something a computer can understand. If you want the computer to turn on an LED, you need to make sure it understands that.</p>
    </DoubleColumn>
  </div>
)};

export default Syntax;
