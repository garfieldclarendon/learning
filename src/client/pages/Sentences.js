import React from 'react';
import DoubleColumn from '../layout/DoubleColumn';
import Icon from '../../assets/img'
import SortActivity from '../Components/SortActivity';

const activityData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Feed Froggy'},
    'task-2': { id: 'task-2', content: 'Walk Dino'},
    'task-3': { id: 'task-3', content: 'Print Fishy Pecos'},
    'task-4': { id: 'task-4', content: 'Hug Sherbert'},
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
  return (
  <div>
    <DoubleColumn
      asideContent={
      (
        <div>
         <Icon width="400px" name="structure" />
        </div>
      )
    }
      prevLink="intro"
      nextLink="syntax"
      title="Sentences of Programing"
    >
      <p>You've learned that in English we have rules we all follow in order to understand eachother. Programing is similar. Unlike humans though, computers can't ask you, "What did you mean?". This is why it's important what we tell a computer makes sense for it.</p>
      <SortActivity activityData={activityData} answerKey={['task-1','task-2','task-3','task-4']} />
      <p>Sentences in English are called Syntax in programing.</p>
    </DoubleColumn>
  </div>
)};

export default Sentences;
