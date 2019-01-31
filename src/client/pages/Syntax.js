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
      <p>We learned a line of code could be considered a sentence. On the right is another example of this.</p>
      <h2>Think About It</h2>
      <p>Can you look at the lines of code below and find ones that look out of place?</p>
      <p>PHOTO GOES HERE</p>

    </DoubleColumn>
  </div>
)};

export default Syntax;
