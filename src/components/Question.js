import React from 'react'
import Answer from './Answer'

const Question = ({ question, answers }) => {

  const renderedAnswers = answers.map((answer) => {
    return <Answer answer={answer} />
  })
  return (
    <div className='question-container'>
      <h2>Question</h2>
      {renderedAnswers}
    </div>
  )
}

export default Question