import React from 'react';
import DoubleColumn from '../layout/DoubleColumn';
import Icon from '../../assets/img'
import SortActivity from '../Components/SortActivity';
import { styledComponent } from '../utils/styledComponent'

const StyledDiv = styledComponent('div', {
  '& .codePiece': {
    display: 'block',
    marginBottom: '15px',
  },
  '& .body': {
    color: '#4ba24b',
  },
  '& .function': {
    color: '#d43fc6',
  },
  '& .event': {
    color: '#63cef1',
  },
  '& .eventListener': {
    color: '#e68e4b',
  }
});


const activityData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'make'},
    'task-2': { id: 'task-2', content: ';'},
    'task-3': { id: 'task-3', content: '()'},
    'task-4': { id: 'task-4', content: 'Cookies'},
  },
  columns: {
    'column1': {
      id: 'column1',
      title: 'Answer Bank',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
    },
    'column2': {
      id: 'column2',
      title: 'Program',
      taskIds: [],
    },
  },
  columnOrder: ['column1', 'column2'],
};

const Sentences = () => {
  window.scrollTo(0, 0);
  return (
  <StyledDiv>
    <DoubleColumn
      asideContent={
      (
        <div>
         <Icon width="400px" name="structure" />
        </div>
      )
    }
      prevLink="warmingup3"
      nextLink="warmingupquiz"
      title="Sentences of Programing"
    >
      <p>You've learned that in English we have rules we all follow in order to understand eachother. Programing is similar. Unlike humans though, computers can't ask you, "What did you mean?". This is why it's important what we tell a computer makes sense for it.</p>
      <p>Sentences in English are called Syntax in programing. Let's learn the basics to build a program and then try it on your own.</p>
      <ul>
        <li><b className="function">Function</b> In the example on the right, our funciton is called "runMixer". Functions can be called anything but generally follow a pattern of verb and noun.</li>
        <li><b className="function">Parentheses</b> This pair goes right next to a function. They might contain additional infomration between them.</li>
        <li><b className="function">;</b> Semicolon, this piece of punctuation acts like a period and marks the end of a line of code.</li>
        <li><b className="body">Line of code</b> Instead of sentences, we have lines of code.</li>
      </ul>
      <SortActivity activityData={activityData} answerKey={['task-1','task-4','task-3','task-2']} />
    </DoubleColumn>
  </StyledDiv>
)};

export default Sentences;
