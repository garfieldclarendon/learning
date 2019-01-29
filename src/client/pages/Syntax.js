import React from 'react';
import DoubleColumn from '../layout/DoubleColumn';
import Icon from '../../assets/img'

const Syntax = () => {
  return (
  <div>
    <DoubleColumn
      asideContent={
      (
        <div>
         <Icon width="400px" name="syntax" />
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
