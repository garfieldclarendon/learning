import React from 'react'
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd'
const Types = {
 ITEM: 'toy'
}
const itemSource = {
  beginDrag(props, monitor, component) {
    console.log("starting to drag");
    return {
      color: props.color,
    };
 },
 endDrag(props, monitor, component) {
   console.log("end drag");
   if (!monitor.didDrop()) {
        // You can check whether the drop was successful
        // or if the drag ended but nobody handled the drop
        return;
      }

      // When dropped on a compatible target, do something.
      // Read the original dragged item from getItem():
      const item = monitor.getItem();

      // You may also read the drop result from the drop target
      // that handled the drop, if it returned an object from
      // its drop() method.
      const dropResult = monitor.getDropResult();
      console.log(dropResult);
 }
}
function collect(connect, monitor) {
 return {
 connectDragSource: connect.dragSource(),
 isDragging: monitor.isDragging()
 }
}
class Card extends React.Component {
 render() {
 const { isDragging, connectDragSource, src } = this.props
 return connectDragSource(
 <div>Test</div>
 )
 }
}

Card.propTypes = {
  color: PropTypes.string.isRequired,
  connectDragSource: PropTypes.func.isRequired,
};

export default DragSource(Types.ITEM, itemSource, connect => ({
  connectDragSource: connect.dragSource(),
}))(Card)
