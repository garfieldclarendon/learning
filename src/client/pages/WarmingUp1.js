import React from 'react';
import DoubleColumn from '../layout/DoubleColumn';

const WarmingUp1 = () => (
  <DoubleColumn
    asideContent={
    (
      <div>
        <h1>Things used in Baking</h1>
        <ul>
          <li>
            <b>Ingredients</b>
            Butter, eggs, milk, etc. are all pieces used to create something
bigger, a cookie!
          </li>
          <li>
            <b>Mixer</b>
            All our ingredients need to be combined and mixed to
make our cookie.
          </li>
          <li>
            <b>Events</b>
            Putting the cookies into the oven, setting a timer, having the
timer go off.
          </li>
          <li>
            <b>(ears to) Listen</b>
            You need to set a timer to know when to take the cookies out.
          </li>
        </ul>
      </div>
    )
  }
    prevLink="syntax"
    nextLink="warmingup2"
    title="Baking up Code"
  >
    <div>
      <p>We’re going to learn a few concepts that are building blocks for all coding.</p>
      <p>We’re going to compare baking to building code.</p>
    </div>
  </DoubleColumn>
);

export default WarmingUp1;
