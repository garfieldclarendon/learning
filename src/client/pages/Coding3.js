import React from 'react';
import TriColumn from '../layout/TriColumn';
import CodeEditor from '../components/CodeEditor';

const Coding3 = () => (
  <div>
    <TriColumn
      asideContent={
      (
        <React.Fragment>
          <h1>Code Example Bank</h1>
          <pre>{`socket.on('sensorTriggered', () => {
    // Something happens here whenever any sensor is triggered
});

io.emit('turnGatesOn');

io.emit('turnGatesOff');

// Timer Events

wait(5); // in seconds

waitForInactivityThenDoSomething(() => {
 // Something happens here
});
          `}</pre>
        </React.Fragment>
      )
      }
      prevLink="coding2"
      nextLink="coding4"
      title="Third Task"
      centerContent={
        (
          <CodeEditor code={`socket.on('sensorTriggered', () => {
    io.emit('turnGatesOn');
    wait(5);
});`}
          />)}
    >
      <p>Hum, sometimes the gates are going up while a train is still there! We can’t have that.</p>
      <h2>How can we get the gates to ONLY go up AFTER the train is not on the crossing?</h2>
    </TriColumn>
  </div>
);

export default Coding3;
