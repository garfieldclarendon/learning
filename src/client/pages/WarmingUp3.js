import React from 'react';
import DoubleColumn from '../layout/DoubleColumn';
import Icon from '../../assets/img'
import { styledComponent } from '../utils/styledComponent'

const StyledDiv = styledComponent('div', {
  '& .codePiece': {
    display: 'block',
    marginBottom: '15px',
  },
  '& .body': {
    color: '#4ba24b',
  },
  '& .function': {
    color: '#d43fc6',
  },
  '& .event': {
    color: '#63cef1',
  },
  '& .eventListener': {
    color: '#e68e4b',
  }
});

const WarmingUp3 = () => {
  window.scrollTo(0, 0);
  return (
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
    nextLink="sentencesofprograming"
    title="Baking up Code"
  >
    <StyledDiv>
      <p>Think back to the last time you made cookies. You probably followed a recipe or got help from an adult. Let's see how we can translate some common tasks into code using what you've learned so far.</p>
      <Icon name="mixer" width="200" />
      <ul>
        <li><i>Ingredients -</i> We need to place our ingredients into our mixing bowl. <i className="codePiece body">This is a body of a function.</i></li>
        <li><i>Mixer -</i> Our mixer will perform a job and combine everything. <i className="codePiece function">This is a function.</i></li>
        <li><i>Place in Over -</i> We need to bake our cookies. <i className="codePiece event">This is an event.</i></li>
        <li><i>Listen for Timer -</i> We need to wait to hear when the timer goes off. <i className="codePiece eventListener">This is an event listener.</i></li>
        <li><i>Taking Out to Cool</i> We need remove the tray and set aside to cool.  <i className="codePiece event">This is another event.</i></li>
      </ul>
    </StyledDiv>
  </DoubleColumn>
)};

export default WarmingUp3;
