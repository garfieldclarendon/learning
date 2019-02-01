import React from 'react'
import DoubleColumn from '../layout/DoubleColumn'
import Icon from '../../assets/img'
import glamorous from 'glamorous';
import * as glamor from 'glamor';
import railroadCrossing from '../../assets/img/railroadCrossing.png'
import RRCrossing from '../../assets/img/RRCrossing.png'
import { styledComponent } from '../utils/styledComponent'

const bounce = glamor.css.keyframes({
  '0%, 100%': {
    transform: 'translateY(0)'
  },
  '50%': {
    transform: 'translateY(-5px)'
  }
});

const Answers = styledComponent('ul', {
  '& li': {
    '& span': {
      color: '#5a5a5a',
      opacity: 0,
      transition: 'opacity 0.2s ease',
    },
    borderBottom: '1px solid #dacab8',
    color: '#dacab8',
    listStyle: 'square',
  },
  '& li.visible span': {
    opacity: 1,
  },
  width: '300px'
});

const Header = styledComponent('header', {
'& b': {
  fontSize: '12px',
},
'& h2, & h3': {
  marginBottom: 0,
  paddingBottom: 0,
},
'& h3': {
  marginTop: 0,
},
'& .inst': {
  color: '#1EAD8B',
  fontWeight: 'lighter',
  margin: '15px 0 0 0',
  maxHeight: '20px',
},
'& .inst.hide': {
  opacity: 0,
  maxHeight: 0,
  transition: 'opacity 0.2s ease',
  transition: 'max-height 0.2s ease',
},
'& .youWon': {
  color: '#06960e',
  opacity: 0,
  transition: 'opacity 0.2s ease',
},
'& .youWon.done': {
  opacity: 1,
  animation: `${bounce} 1s ease infinite`,
}
});
const ImageWrapper = styledComponent('div', {
  '& .hotSpots': {
    '& #crossingBuckHS': {
      left: '320px',
      height: '60px',
      top: '345px',
      width: '60px',
    },
    '& #crossingGateHS': {
      left: '270px',
      height: '50px',
      top: '385px',
      width: '60px',
    },
    '& #crossingLightsHS': {
      left: '320px',
      height: '20px',
      top: '410px',
      width: '50px',
    },
    '& #crossingSignHS': {
      left: '260px',
      height: '30px',
      top: '450px',
      width: '30px',
    },
    '& #crossingBarrierHS': {
      left: '530px',
      height: '90px',
      transform: 'rotate(60deg)',
      top: '236px',
      width: '20px',
    },
    '& div': {
      backgroundColor: 'transparent',
      transition: 'all 0.2s ease',
      position: 'absolute',
      zIndex: 2,
    },
    '& .selected': {
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      transform: 'scale(1.4)',
    },
  },
  '& .barrier': {
    left: '510px',
    position: 'absolute',
    top: '250px',
    zIndex: 1,
  },
  '& .crossbuck': {
    left: '324px',
    position: 'absolute',
    top: '355px',
    zIndex: 1,
  },
  '& .crossingSign': {
    left: '260px',
    position: 'absolute',
    top: '450px',
    zIndex: 1,
  },
  '& :hover': {
    cursor: 'pointer',
  },
  position: 'relative',
});


export default class CrossingSaftey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answersFound: {
        answer1: false,
        answer2: false,
        answer3: false,
        answer4: false,
        answer5: false,
      },
      initial: '',
      done: '',
      selected: ['', '' , '', '' , '', '']
    };
  }

  recordAnswer = (answer) => {
    const answers = this.state.answersFound;
    answers[answer.currentTarget.dataset.answerid] = true;
    const answerNumber = answer.currentTarget.dataset.answerid.split('answer');
    const answerAnimation = []

    answerAnimation[answerNumber[1]] = 'selected'
    this.setState({selected: answerAnimation})

    if (Object.values(answers).indexOf(false) === -1) {
      this.setState({
        done: 'done',
      });
    }

    this.setState({
      answersFound: answers,
      initial: 'hide',
    });
  }

  render() {
    return (
  <div>
    <DoubleColumn
      asideContent={
      (
        <div>
          <h1>Think about It</h1>
          <p>Next time you travel over a railroad crossing, look to see all the saftey devices</p>
          <p>Look Listen and Live. See tracks, always think there might be a train!</p>
        </div>
      )
    }
      prevLink="intro"
      nextLink="sentencesofprograming"
      title="Railroad Crossing Saftey"
    >
      <p>Let's look at a typical railroad crossing. Click the image below to identify all the saftey systems in place.</p>
      <ImageWrapper>
        <div className="hotSpots">
          <div data-answerid="answer1" className={`answer1 ${this.state.selected[1]}`} id="crossingSignHS" onClick={this.recordAnswer} />
          <div data-answerid="answer2" className={`answer2 ${this.state.selected[2]}`} id="crossingBuckHS" onClick={this.recordAnswer} />
          <div data-answerid="answer3" className={`answer3 ${this.state.selected[3]}`} id="crossingLightsHS" onClick={this.recordAnswer} />
          <div data-answerid="answer4" className={`answer4 ${this.state.selected[4]}`} id="crossingGateHS" onClick={this.recordAnswer} />
          <div data-answerid="answer5" className={`answer5 ${this.state.selected[5]}`} id="crossingBarrierHS" onClick={this.recordAnswer} />
        </div>
        <Icon name="barrier" width={60} />
        <Icon name="crossing" width={50} />
        <img className="crossingSign" width="30" src={RRCrossing} alt="railroad crossing"/>
        <img width="600" src={railroadCrossing} alt="railroad crossing"/>
      </ImageWrapper>
      <Header>
        <h2>Answers</h2>
        <h3 className={`inst ${this.state.initial}`}>Click image to find answers</h3>
        <h3 className={`youWon ${this.state.done}`}>Congrats! You found them all!</h3>
      </Header>
      <Answers>
        <li className={this.state.answersFound.answer1 ? 'visible' : ''} id="answer1">
          <span>Crossing Sign</span>
        </li>
        <li className={this.state.answersFound.answer2 ? 'visible' : ''} id="answer2">
          <span>Crossbuck</span>
        </li>
        <li className={this.state.answersFound.answer3 ? 'visible' : ''} id="answer3">
          <span>Crossing Lights</span>
        </li>
        <li className={this.state.answersFound.answer4 ? 'visible' : ''} id="answer4">
          <span>Crossing Gate</span>
        </li>
        <li className={this.state.answersFound.answer5 ? 'visible' : ''} id="answer5">
          <span>Traffic Barrier</span>
        </li>
      </Answers>
    </DoubleColumn>
  </div>
)};
}
