import React from 'react';
import TriColumn from '../layout/TriColumn';
import CodeEditor from '../components/CodeEditor';

const Coding1 = () => (
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
          `}</pre>
        </React.Fragment>
      )
      }
      prevLink="warmingupquiz"
      nextLink="code2"
      title="First Task"
      centerContent={
        (
          <CodeEditor code={`socket.on('sensorTriggered', () => {
    // Something happens here
});`}
          />)}
    >
      <p>The Garfield Central has installed two sensors on the tracks, one before and one after the crossing.</p>
      <h2>How can we trigger the crossing gates before the train arrives?</h2>
  </TriColumn>
  </div>
);

export default Coding1;
