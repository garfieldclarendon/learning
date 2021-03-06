import React from 'react'
import Barrier from './Barrier'
import Clock1 from './Clock1'
import PeopleCollage from './PeopleCollage'
import Georgetown from './Georgetown'
import GCMRR from './GCMRR'
import Structure from './Structure'
import Syntax from './Syntax'
import Cook from './Cook'
import Mixer from './Mixer'
import TallHair from './people/TallHair'
import RedHood from './people/RedHood'
import Crossing from './Crossing'

const Icon = props => {
  switch(props.name) {
    case "barrier":
      return <Barrier {...props} />;
    case "clock1":
      return <Clock1 {...props} />;
    case "cook":
      return <Cook {...props} />;
    case "crossing":
      return <Crossing {...props} />;
    case "gcmrr":
      return <GCMRR {...props} />;
    case "georgetown":
      return <Georgetown {...props} />;
    case "peopleCollage":
      return <PeopleCollage {...props} />;
    case "personTallHair":
      return <TallHair {...props} />;
    case "personRedHood":
      return <RedHood {...props} />;
    case "mixer":
      return <Mixer {...props} />;
    case "structure":
      return <Structure {...props} />;
    case "syntax":
      return <Syntax {...props} />;
    default:
      return <div />;
  }
}
export default Icon;
