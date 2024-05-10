import React from 'react'
import Answer from './Answer'
import Button from './Button'

const Question = ({ question, answers }) => {

  const renderedAnswers = answers.map((answer) => {
    return <Answer answer={answer} />
  })
  return (
    <div className='question-container'>
      <h2>Question</h2>
      {renderedAnswers}
      <Button text='edit' onclick={() => console.log('edit')} />
    </div>
  )
}

export default Question