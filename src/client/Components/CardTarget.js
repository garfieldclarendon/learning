import React from 'react'
import { DropTarget } from 'react-dnd'
const Types = {
 ITEM: 'toy'
}
function collect(connect, monitor) {
 return {
 connectDropTarget: connect.dropTarget()
 }
}

const cardTarget = {
  drop(targetProps, monitor) {
    return {
      card: monitor.getItem().color
    };
  },
};

class CardTarget extends React.Component {
 render() {
 const { connectDropTarget } = this.props
 return connectDropTarget(
   <div>Target</div>
 )
 }
}
export default DropTarget(Types.ITEM, cardTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
}))(CardTarget)
