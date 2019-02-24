import React from 'react';
import DoubleColumn from '../layout/DoubleColumn';

const WarmingUp2 = () => {
  window.scrollTo(0, 0);
  return (
  <DoubleColumn
      asideContent={
      (
        <div>
          <h1>Things used in Coding</h1>
          <ul>
            <li>
              <b>Body</b>
              Code that is needed for the computer to do something like turning on an LED.
            </li>
            <li>
              <b>Function</b>
              Takes the body and does something with it. Like a mixer, it needs to be turned on by an event.
            </li>
            <li>
              <b>Events</b>
              Something that happens from an input to the computer, like pressing a button.
            </li>
            <li>
              <b>Event Listeners</b>
              Listening for when an event happens and then making a function happen.
            </li>
          </ul>
        </div>
      )
    }
      prevLink="warmingup1"
      nextLink="warmingup3"
      title="Let’s see how these compare to codeing"
    >
      <div className="compareToBox">
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
    </DoubleColumn>
)};

export default WarmingUp2;
