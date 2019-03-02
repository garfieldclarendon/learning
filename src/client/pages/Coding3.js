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


const Coding3 = () => (
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

socket.on('setAnOffTimer', () => {
// Something happens here whenever the sensor is inactive for 5 seconds
});

`}
          />
        </React.Fragment>
      )
      }
      prevLink="Coding2"
      nextLink="Coding4"
      title="Third Task"
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
    sleep(5);
    socket.emit('turnGatesOff');
});`}
            />
          </CenterStyled>
          )}
    >
      <p>Hum, sometimes the gates are going up while a train is still there! We can’t have that.</p>
      <h2>How can we get the gates to ONLY go up AFTER the train is not on the crossing?</h2>
  </TriColumn>
  </div>
);

export default Coding3;
