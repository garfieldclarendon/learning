import React from 'react';
import Clock1 from './Clock1';

const Icon = props => {
  switch(props.name) {
    case "clock1":
      return <Clock1 {...props} />;
    default:
      return <div />;
  }
}
export default Icon;
