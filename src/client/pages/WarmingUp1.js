import React from 'react';
import DoubleColumn from '../layout/DoubleColumn';
import Icon from '../../assets/img'

const WarmingUp1 = () => {
  window.scrollTo(0, 0);
  return (
  <DoubleColumn
    asideContent={
    (
      <div>
        <h1>Did you Know?</h1>
        <p>Sometimes pieces of code are called receipes.</p>
      </div>
    )
  }
    prevLink="sentencesofprograming"
    nextLink="warmingup2"
    title="Baking up Code"
  >
    <div>
      <p>Baking is a great example to help further our understanding of coding.</p>
      <p>We’re going to learn a few concepts that are building blocks for all coding. Let's look at how we can compare common baking items and terms to our code.</p>
      <Icon name="cook" />
    </div>
  </DoubleColumn>
)};

export default WarmingUp1;
