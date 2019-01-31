import React from 'react';
import DoubleColumn from '../layout/DoubleColumn';
import Icon from '../../assets/img'

const WarmingUp3 = () => (
  <DoubleColumn
    asideContent={
    (
      <div>
        <h1>Imagine This</h1>
        <p>Telling a computer what to do is like being blindfolded and decribing to a friend how to bake a batch of your favorite cookies. If you don't describe things well you just might end up something awful.</p>
      </div>
    )
  }
    prevLink="warmingup2"
    nextLink="warmingup4"
    title="Baking up Code"
  >
    <div>
      <p>Think back to the last time you made cookies. You probably followed a recipe or got help from an adult. Let's see how we can translate some common tasks into code using what you've learned so far.</p>
      <Icon name="mixer" width="200" />
      <ul>
        <li><b>Ingredients</b> We need to place our ingredients into our mixing bowl</li>
        <li><b>Mixer</b> Our mixer will perform a job and combine everything</li>
        <li><b>Place in Over</b> We need to bake our cookies</li>
        <li><b>Listen for Timer</b> We need to wait to hear when the timer goes off</li>
        <li><b>Taking Out to Cool</b> We need remove the tray and set aside to cool</li>
      </ul>
    </div>
  </DoubleColumn>
);

export default WarmingUp3;
