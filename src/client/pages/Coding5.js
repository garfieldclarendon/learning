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


const Coding5 = () => (
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
      prevLink="Coding4"
      nextLink="Coding5"
      title="Fifth Task"
      centerContent={
        (
          <CenterStyled>
            <h1>Code to Execute</h1>
            <CodeEditor
              height="350px"
              width="350px"
              code={`socket.on('sensorTriggered', () => {
    io.emit('turnGatesOn');
    sleep(5);
    io.emit('turnGatesOff');
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

export default Coding5;
