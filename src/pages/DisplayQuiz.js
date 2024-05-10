import React from 'react'
import Date from '../components/Quiz/Date'
import Questions from '../components/Questions'
import Answers from '../components/Answers'

const DisplayQuiz = (props) => {

    const editBtn = (
        <a href='/edit-quiz'>
            <button onClick={(e) => console.log(e.target.value)}>Edit Quiz</button>
        </a>)

    const  { quiz } = props
    console.log('props.quiz display', props.quiz)
    return (
        <div>
            <h1>Quiz</h1>
            <h2>{quiz.title}</h2>
            <Date />
            <Questions />
            <Answers />

            {editBtn}
        </div>
    )
}

export default DisplayQuiz
