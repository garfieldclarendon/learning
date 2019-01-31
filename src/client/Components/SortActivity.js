import React from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Column from './Column';
import { styledComponent } from '../utils/styledComponent'
import Icon from '../../assets/img'

const StyledSection = styledComponent('section', {
  '& .block': {
    '&:hover': {
      cursor: 'pointer',
    },
    background: '#ffdb66',
    border: '1px solid #bdaa19',
    borderRadius: '6px',
    display: 'inline-block',
    fontSize: '14px',
    height: '25px',
    margin: '0 5px 10px 0',
    padding: '5px 10px 0',
    textAlign: 'center',
    verticalAlign: 'middle',
    width: '80px',
  },
  '& header': {
    '& h2': {
      marginBottom: '5px',
    },
    '& svg': {
      marginRight: '10px',
    },
    display: 'flex',
  },
  '& .dragging': {
    opacity: 0.4,
    // animation: `${bounce} 1s ease infinite`,
  },
  '& .hit': {
    background: '#fdf8e8',
    border: '1px dashed #5a5a5a',
    borderRadius: '6px',
    display: 'inline-block',
    height: '30px',
    margin: '0 5px 10px 0',
    width: '100px',
  },
  background: '#decf9d',
  borderRadius: '4px',
  padding: '10px',
});

const FeedbackSection = styledComponent('section', {
  '& .activityError': {
    color: '#EF4242',
    opacity: 0,
    position: 'absolute',
    transition: 'opacity 0.3s',
    left: '10px',
    top: 0,
  },
  '& .activityError.visible': {
    opacity: 1,
  },
  '& .activitySuccess': {
    color: '#06960E',
    opacity: 0,
    position: 'absolute',
    transition: 'opacity 0.3s',
    left: '10px',
    top: 0,
  },
  '& .activitySuccess.visible': {
    opacity: 1,
  },
  height: '25px',
  position: 'relative',
});

const Container = styled.div`
  display: flex;
`;

class InnerList extends React.PureComponent {
  render() {
      const { column, taskMap, index} = this.props;
      const tasks = column.taskIds.map(taskId => taskMap[taskId]);
      return <Column column={column} tasks={tasks} index={index} />
  }
}


class SortActivity extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.activityData;
  }

  pollAnswers = (answers) => {
    if (answers.columns.column2.taskIds.length === 4) {
      this.setState({
        done: true,
        correct: (JSON.stringify(this.props.answerKey)==JSON.stringify(answers.columns.column2.taskIds))
      });
    }
  }

  onDragStart = start => {
    const homeIndex = this.state.columnOrder.indexOf(start.source.droppableId);

    this.setState({
      homeIndex,
    })
  }

  onDragUpdate = update => {
    this.setState({
      done: false,
      correct: false,
    });
  }

  onDragEnd = result => {
    this.setState({
      homeIndex: null,
    })

    const { destination, source, draggableId, type} = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    };

    if (type === 'column') {
      const newColumnOrder = Array.from(this.state.columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      const newState = {
        ...this.state,
        columnOrder: newColumnOrder,
      }
      this.setState(newState);
    }

    const start = this.state.columns[result.source.droppableId];
    const finish = this.state.columns[result.destination.droppableId]

    if(start === finish && type !== 'column') {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn,
        },
      };
      this.setState(newState);
      this.pollAnswers(newState);
    } else if(type !== 'column') {
      //Moving from column to columns
      const startTaskIds = Array.from(start.taskIds);
      startTaskIds.splice(source.index, 1);
      const newStart = {
        ...start,
        taskIds: startTaskIds,
      };

      const finishTaskIds = Array.from(finish.taskIds);
      finishTaskIds.splice(destination.index, 0, draggableId);
      const newFinish = {
        ...finish,
        taskIds: finishTaskIds,
      };

      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newStart.id]: newStart,
          [newFinish.id]: newFinish,
        },
      };
      this.setState(newState);
      this.pollAnswers(newState);
    }

  };

  render() {
    return (
      <StyledSection>
        <header>
          <Icon width="100px" name="personTallHair" />
          <div>
            <h2>Help James build a program</h2>
            <p>Drag the pieces of code into the proper spot to build a program.</p>
          </div>
        </header>
        <FeedbackSection>
          <span className={`activityError ${this.state.done && !this.state.correct ? 'visible' : ''}`}>Not quite, please try again</span>
          <span className={`activitySuccess ${this.state.done && this.state.correct ? 'visible' : ''}`}>Correct! Great work!</span>
        </FeedbackSection>
        <DragDropContext
          onDragStart={this.onDragStart}
          onDragEnd={this.onDragEnd}
          onDragUpdate={this.onDragUpdate}
        >
          <Droppable droppableId="all-columns" direction="horizontal" type="column">
            {provided => (
              <Container
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {this.state.columnOrder.map((columnId, index) => {
                  const column = this.state.columns[columnId];

                  const isDropDisabled = index < this.state.homeIndex;

                  return <InnerList
                          key={column.id}
                          column={column}
                          taskMap={this.state.tasks}
                          index={index}
                          isDropDisabled={isDropDisabled}
                          />;
                })}
                {provided.placeholder}
              </Container>
            )}
          </Droppable>

        </DragDropContext>
      </StyledSection>
    )
  }
}

export default SortActivity;
