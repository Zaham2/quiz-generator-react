import React from 'react'

const Answer = (props) => {

  // const renderedAnswers = props.answers.map((answer) => {
  //   return (
  //     <div>
  //       <h4>Answer:</h4>
  //       <p>{answer.text}</p>
  //     </div>
  //   )
  // })
  const { answer } = props

  return (
    <div>
      <h4>Answer: {answer.id}</h4>
      <p className='answer-text'>{props.answer.text}</p>
    </div>
  )
}

export default Answer
