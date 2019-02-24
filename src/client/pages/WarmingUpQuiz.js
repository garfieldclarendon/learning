/* eslint-disable */
import React from 'react';
import SingleColumn from '../layout/SingleColumn';
import Quiz from 'react-quiz-component';

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
        "Action",
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
        "https://dummyimage.com/600x400/000/fff&text=A",
        "https://dummyimage.com/600x400/000/fff&text=B",
        "https://dummyimage.com/600x400/000/fff&text=C",
        "https://dummyimage.com/600x400/000/fff&text=D"
      ],
      "correctAnswer": "4",
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
  ]
};

const WarmingUpQuiz = () => {
  window.scrollTo(0, 0);
  return (
  <div>
    <SingleColumn
      prevLink="sentencesofprograming"
      nextLink="coding1"
      title="Let's Review"
    >
      <Quiz quiz={quiz} />
    </SingleColumn>
  </div>
)};

export default WarmingUpQuiz;
