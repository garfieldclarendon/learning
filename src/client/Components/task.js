import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
  background: #fdf8e8;
  border: 1px dashed #5a5a5a;
  border-radius: 4px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${props =>
    props.isDragDisabled
    ? 'lightgrey'
    : props.isDragging
      ? 'lightgreen'
      : 'white'};

  display: flex;
`;

export default class Task extends React.Component {
  render() {
    const isDragDisabled = this.props.task.id === 'task-1';
    return (
      <Draggable
        draggableId={this.props.task.id}
        index={this.props.index}
      >
        {(provided, snapshot) => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            innerRef={provided.innerRef}
            isDragging={snapshot.isDragging}
          >
            {/* <Handle /> */}
            {this.props.task.content}
          </Container>
        )}

      </Draggable>
    );
  }
}
