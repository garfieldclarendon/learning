import React from 'react'
import glamorous from 'glamorous'
import { Route, withRouter } from 'react-router-dom'
import Intro from './pages/Intro'
import Syntax from './pages/Syntax'
import Sentences from './pages/Sentences'
import WarmingUp1 from './pages/WarmingUp1'
import WarmingUp2 from './pages/WarmingUp2'
import WarmingUp3 from './pages/WarmingUp3'
import WarmingUp4 from './pages/WarmingUp4'
import WarmingUpQuiz from './pages/WarmingUpQuiz'
import Coding1 from './pages/Coding1'
import Coding2 from './pages/Coding2'
import Coding3 from './pages/Coding3'
import OurLesson from './pages/OurLesson'
import { TransitionGroup, CSSTransition } from "react-transition-group"
import { styledComponent } from './utils/styledComponent'

const StyledDiv = styledComponent('div', {
  '& .transitionGroup': {
      position: 'relative',
  },
  '& .routeWrapper': {
      position: 'absolute',
      width: '100%',
      top: 0,
      left: 0,
  },
  '& .fade-enter': {
      position: 'absolute',
      width: '100%',
      top: 0,
      left: 0,
      opacity: 0.01,
  },
  '& .fade-enter.fade-enter-active': {
      opacity: 1,
      transition: 'opacity 100ms ease-in',
  },
  '& .fade-exit': {
      opacity: 1,
  },
  '& .fade-exit.fade-exit-active': {
      opacity: 0.01,
      transition: 'opacity 300ms ease-in',
  }
});

const Routes = ({ location }) => (
  <StyledDiv>
    <TransitionGroup className="transitionGroup">
      <CSSTransition
        key={location.key}
        timeout={{ enter: 300, exit: 300 }}
        classNames={'fade'}
      >
        <div className="routeWrapper">
          <Route exact path="/intro" component={Intro} />
          <Route exact path="/sentencesofprograming" component={Sentences} />
          <Route exact path="/syntax" component={Syntax} />
          <Route exact path="/warmingup1" component={WarmingUp1} />
          <Route exact path="/warmingup2" component={WarmingUp2} />
          <Route exact path="/warmingup3" component={WarmingUp3} />
          <Route exact path="/warmingup4" component={WarmingUp4} />
          <Route exact path="/warmingupquiz" component={WarmingUpQuiz} />
          <Route exact path="/coding1" component={Coding1} />
          <Route exact path="/coding2" component={Coding2} />
          <Route exact path="/coding3" component={Coding3} />
          <Route exact path="/ourlesson" component={OurLesson} />
        </div>
      </CSSTransition>
    </TransitionGroup>
  </StyledDiv>
)

export default withRouter(Routes)
