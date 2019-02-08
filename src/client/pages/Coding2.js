import React from 'react';
import TriColumn from '../layout/TriColumn';
import CodeEditor from '../components/CodeEditor';
import { styledComponent } from '../utils/styledComponent';

const CenterStyled = styledComponent('div', {
'& h1': {
  fontSize: '16px',
},
paddingTop: '20px',
paddingRight: '20px',
});


const Coding2 = () => (
  <div>
    <TriColumn
      asideContent={
      (
        <React.Fragment>
          <h1>Code Example Bank</h1>
          <CodeEditor
            height="350px"
            width="350px"
            code={`socket.on('sensorTriggered', () => {
    // Something happens here whenever any sensor is triggered
});

io.emit('turnGatesOn');

io.emit('turnGatesOff');

// in seconds
sleep(5);
`}
          />
        </React.Fragment>
      )
      }
      prevLink="coding2"
      nextLink="coding3"
      title="Second Task"
      centerContent={
        (
          <CenterStyled>
            <h1>Code to Execute</h1>
            <CodeEditor
              height="350px"
              width="350px"
              code={`socket.on('sensorTriggered', () => {
    io.emit('turnGatesOn');
});`}
            />
          </CenterStyled>
          )}
    >
      <p>Uh oh! Drivers are reporting that the gates are never going up!</p>
      <h2>How can we get the gates and lights to go up after the train has left?</h2>
  </TriColumn>
  </div>
);

export default Coding2;
