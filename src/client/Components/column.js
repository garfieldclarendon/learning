import React from 'react';
import styled from 'styled-components';
import Task from './Task';
import { Droppable, Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
  margin: 8px;
  border: 1px solid #bdaa19;
  background-color: #fdf8e8;
  border-radius: 2px;
  width: 220px;

  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'inherit')}
  display: flex;

  height: 50px;
  width: 204px;
`;

class InnerList extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.tasks === this.props.tasks) {
      return false
    }
    return true;
  }
  render() {
    return this.props.tasks.map((task, index) => (
      <Task key={task.id} task={task} index={index} />
    ));
  }
}


export default class Column extends React.Component {
  //type={this.props.column.id === 'column-3' ? 'done' : 'active'}
  render() {
    return (
      <Draggable
        draggableId={this.props.column.id}
        index={this.props.index}
        isDragDisabled={true}
      >
        {provided => (
          <Container
            {...provided.draggableProps}
            ref={provided.innerRef}
          >
            <Title {...provided.dragHandleProps}>{this.props.column.title}</Title>
            <Droppable
              droppableId={this.props.column.id}
              isDropDisabled={this.props.isDropDisabled}
              type="task"
              direction="horizontal"
            >
              {(provided, snapshot) => (
                <TaskList
                  ref={provided.innerRef}
                  innerRef={provided.innerRef}
                  isDraggingOver={snapshot.isDraggingOver}
                  {...provided.droppableProps}
                >
                  <InnerList tasks={this.props.tasks} />
                  {provided.placeholder}
                </TaskList>
              )}
            </Droppable>
          </Container>
        )}
      </Draggable>
    )
  }
}
