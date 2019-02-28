/* eslint-disable */
import React from 'react';
import SingleColumn from '../layout/SingleColumn';
import Quiz from 'react-quiz-component';
import crossing2 from '../../assets/img/crossing2.jpg'
import crossing3 from '../../assets/img/crossing3.jpg'
import crossing4 from '../../assets/img/crossing4.jpg'
import crossing5 from '../../assets/img/crossing5.jpg'

const quiz = {
  "quizTitle": "Core Concepts",
  "quizSynopsis": "Let's review what we just learned.",
  "questions": [
    {
      "question": "In code what does something for you?",
      "questionType": "text",
      "answers": [
        "function",
        "event",
        "variable",
        "foo"
      ],
      "correctAnswer": "1",
      "messageForCorrectAnswer": "Nice! Good job!",
      "messageForIncorrectAnswer": "Incorrect, please try again.",
      "explanation": "A function contains a body - function body - that has ingredients we'd like to use in our program. Remember the mixer bowl."
    },
    {
      "question": "What would someone pressing a button be called?",
      "questionType": "text",
      "answers": [
        "Parentheses",
        "Event",
        "Pulse Effect",
        "Cookie"
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Correct answer. Good job!",
      "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      "explanation": "An event occurs when a device hookied up to a computer is seen action."
    },
    {
      "question": "Computer language is structured by rules called syntax.",
      "questionType": "text",
      "answers": [
        "True",
        "False"
      ],
      "correctAnswer": "1",
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      "explanation": "Syntax is a complicated word, much like computers are. This is one way to remember this!"
    },
    {
      "question": "Find the crossing that is most safe",
      "questionType": "photo",
      "answers": [
        crossing2,
        crossing3,
        crossing4,
        crossing5
      ],
      "correctAnswer": "3",
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      "explanation": "This crossing uses all the saftey systems including barriers to prevent cars from driving around down gates."
    }
  ]
};

export default class WarmingUpQuiz extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      done: false,
    }
  };

  // This is very hacky but there is no completion event for the quiz
  enableNext = () =>
    setTimeout(
      function() {
          this.setState({done: true});
      }
      .bind(this),
      180000
    );

  render() {
    window.scrollTo(0, 0);
    this.enableNext();
    return (
    <div>
      <SingleColumn
        prevLink="sentencesofprograming"
        nextLink={this.state.done ? 'bridge1' : null}
        title="Let's Review"
      >
        <Quiz quiz={quiz} />
      </SingleColumn>
    </div>
  )};

}
