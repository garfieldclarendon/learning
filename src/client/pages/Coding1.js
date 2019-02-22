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


const Coding1 = () => {
  window.scrollTo(0, 0);
  return (
  <div>
    <TriColumn
      asideContent={
      (
        <React.Fragment>
          <h1>Code Example Bank</h1>
          <CodeEditor
            height="330px"
            width="350px"
            code={`socket.on('sensorTriggered', () => {
    // Something happens here whenever any sensor is triggered
});

io.emit('turnGatesOn');

io.emit('turnGatesOff');`}
          />
        </React.Fragment>
      )
      }
      prevLink="warmingupquiz"
      nextLink="coding2"
      title="First Task"
      centerContent={
        (
          <CenterStyled>
            <h1>Code to Execute</h1>
            <CodeEditor
              showButton={true}
              height="350px"
              width="350px"
              code={`socket.on('sensorTriggered', () => {
      // Something happens here
  });`}
            />
          </CenterStyled>
          )}
    >
      <p>The Garfield Central has installed two sensors on the tracks, one before and one after the crossing.</p>
      <h2>How can we trigger the crossing gates before the train arrives?</h2>
  </TriColumn>
  </div>
)};

export default Coding1;
