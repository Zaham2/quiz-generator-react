import React from 'react'
import Answer from './Answer'
import Button from './Button'
import { useNavigate } from 'react-router-dom'

const Question = ({ question, answers }) => {

  const navigate = useNavigate()

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