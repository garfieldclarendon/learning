import React from 'react';
import TriColumn from '../layout/TriColumn';
import CodeEditor from '../components/CodeEditor';

const Coding2 = () => (
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
          `}</pre>
        </React.Fragment>
      )
      }
      prevLink="coding1"
      nextLink="coding3"
      title="Second Task"
      centerContent={
        (
          <CodeEditor code={`socket.on('sensorTriggered', () => {
    io.emit('turnGatesOn');
  });`}
          />)}
    >
      <p>Uh oh! Drivers are reporting that the gates are never going up!</p>
      <h2>How can we get the gates and lights to go up after the train has left?</h2>
  </TriColumn>
</div>
);

export default Coding2;
