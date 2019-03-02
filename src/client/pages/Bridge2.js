import React from 'react';
import DoubleColumn from '../layout/DoubleColumn';
import Icon from '../../assets/img'
import { styledComponent } from '../utils/styledComponent'
import soupCan from '../../assets/img/soupCan.jpg'

const StyledDiv = styledComponent('div', {
  '& .library': {
    color: '#5c4ae0',
  },
  '& .function': {
    color: '#2a8d9e',
  },
  '& .parentheses': {
    color: '#c73e5c',
  },
});

const Bridge1 = () => {
  window.scrollTo(0, 0);
  return (
  <DoubleColumn
    asideContent={
    (
      <div>
        <h1>Libraries</h1>
        <p>Named after real-life ones, libraries make coding easier and fun.</p>
      </div>
    )
  }
    prevLink="bridge1"
    nextLink="coding1"
    title="Socket.io"
  >
    <StyledDiv>
      <p>Introducing our library <b className="library">socket</b></p>
      <p>Remember our example? <b><span className="function">runMixer</span><span className="parentheses">()</span></b></p>
      <p>With socket it will look like <b><span className="function">socket.on</span><span className="parentheses">()</span></b></p>
      < hr />
      <p>Like we can pass ingredients? <b><span className="function">runMixer</span><span className="parentheses">('flower')</span></b></p>
      <p>We can tell it to do things <b><span className="function">socket.on</span><span className="parentheses">('turnGatesOn')</span></b></p>
    </StyledDiv>
  </DoubleColumn>
)};

export default Bridge1;
