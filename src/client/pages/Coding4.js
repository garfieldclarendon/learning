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


const Coding4 = () => (
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

socket.emit('turnGatesOn');

socket.emit('turnGatesOff');

// in seconds
sleep(5);

// Make lights all go red
socket.emit('stopLightCycle');
`}
          />
        </React.Fragment>
      )
      }
      prevLink="Coding3"
      nextLink="Coding5"
      title="Fourth Task"
      centerContent={
        (
          <CenterStyled>
            <h1>Code to Execute</h1>
            <CodeEditor
              showButton={true}
              height="350px"
              width="350px"
              code={`socket.on('sensorTriggered', () => {
    socket.emit('turnGatesOn');
});

socket.on('setAnOffTimer', () => {
    socket.emit('turnGatesOff');
});`}
            />
          </CenterStyled>
          )}
    >
      <p>The traffic light is not synced up with the railroad crossing.</p>
      <h2>How can we make this safer? Specifically, how can we make the traffic light red when there is a train crossing?</h2>
  </TriColumn>
  </div>
);

export default Coding4;
