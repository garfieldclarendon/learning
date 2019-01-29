import React from 'react';
import Icon from '../../assets/img'
import glamorous from 'glamorous';
import * as glamor from 'glamor';
import { styledComponent } from '../utils/styledComponent'

const bounce = glamor.css.keyframes({
  '0%, 100%': {
    transform: 'translateY(0)'
  },
  '50%': {
    transform: 'translateY(-5px)'
  }
});

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

let draggedItem = 0;
const dragging = [false, '', '', '', ''];
const sentenceOrder = [];

function dragWord(dragEvent){
  dragEvent.dataTransfer.setData("text/plain", dragEvent.currentTarget.innerHTML);
  draggedItem = dragEvent.currentTarget.id.match(/\d+/g);
  dragging[draggedItem] = 'dragging';
  dragEvent.currentTarget.className = 'block dragging';
}

function dropWord(dropEvent){
  if (dropEvent) {
    document.getElementsByClassName("dragging")[0].className = "block";
  }
  console.log(dragging.indexOf('dragging'));
  console.log(dropEvent.currentTarget);
}

function dragOver(event){
  event.preventDefault()
}

const Sentences = () => {
  return (
    <StyledSection>
      <header>
        <Icon width="100px" name="personTallHair" />
        <h2>Help James build a program</h2>
        <p>Drag the pieces of code into the proper spot to build a program.</p>
      </header>
      <div className="contentArea">
        <div className="blockWrapper">
          <div id="item1" className="block" draggable="true" onDragStart={dragWord}>()</div>
          <div id="item2" className="block" draggable="true" onDragStart={dragWord}>=></div>
          <div id="item3" className="block" draggable="true" onDragStart={dragWord}>makeCookies</div>
          <div id="item4" className="block" draggable="true" onDragStart={dragWord}>;</div>
        </div>
        <div className="hitWrapper">
          <div className="hit" onDragOver={dragOver} onDrop={dropWord} />
          <div className="hit" onDragOver={dragOver} onDrop={dropWord} />
          <div className="hit" onDragOver={dragOver} onDrop={dropWord} />
          <div className="hit" onDragOver={dragOver} onDrop={dropWord} />
        </div>
      </div>
    </StyledSection>
  )};

  export default Sentences;
