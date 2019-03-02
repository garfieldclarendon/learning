import React from 'react';
import DoubleColumn from '../layout/DoubleColumn';
import Icon from '../../assets/img'
import { styledComponent } from '../utils/styledComponent'
import soupCan from '../../assets/img/soupCan.jpg'

const StyledDiv = styledComponent('div', {
  'textAlign': 'center',
});

const Bridge1 = () => {
  window.scrollTo(0, 0);
  return (
  <DoubleColumn
    asideContent={
    (
      <div>
        <h1>Think About It</h1>
        <p>Image how difficult it would be to need to create the cheese sauce for mac and cheese. Having this made for you makes this dish eaiser and you can still customize it with things like bacon.</p>
      </div>
    )
  }
    prevLink="warmingupquiz"
    nextLink="bridge2"
    title="Let's get to Coding"
  >
    <div>
      <p>A computer language tells the computer how to do things inside the computer but usually doesn't know much about the world around it.</p>
      <p>Thats why people create things called <b>Libraries</b>.</p>
      <p>A library is a collection of features pre-built for you. It bridges the gap between the language and the rest of the world.</p>
      <StyledDiv><img width="200" src={soupCan} alt="soup can"/></StyledDiv>
      <p>A library is like a can of cream of mushroom soup in a casserole, it allows you to cook your recipe without knowing the details of everything that goes into it. It also lets you make your dish much quicker.</p>
    </div>
  </DoubleColumn>
)};

export default Bridge1;
