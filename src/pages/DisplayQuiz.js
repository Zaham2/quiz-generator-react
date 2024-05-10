import React, { useEffect, useState } from 'react'
import Date from '../components/Date'
import Question from '../components/Question'
import Answer from '../components/Answer'

function extractQuestions(questions_answers) {

    let questions = []

    for (let qa of questions_answers) {
        const q = {
            answer_id: qa.answer_id,
            feedback_false: qa.feedback_false,
            feedback_true: qa.feedback_true,
            id: qa.id,
            text: qa.text
        }
        questions.push(q)
    }
    return questions
}

function extractAnswers(questions_answers) {

    let answers = []

    for (let qa of questions_answers) {
        let temp = []
        for (let a of qa.answers) {
            temp.push(a)
        }
        answers.push(temp)
    }
    return answers
}

const DisplayQuiz = (props) => {

    useEffect(() => {
        setQuestions(extractQuestions(props.quiz.questions_answers))
        setAnswers(extractAnswers(props.quiz.questions_answers))
    }, [])


    const [questions, setQuestions] = useState([])
    const [answers, setAnswers] = useState([])

    const editBtn = (
        <a href='/edit-quiz'>
            <button onClick={(e) => console.log(e.target.value)}>Edit Quiz</button>
        </a>)


    const { quiz } = props
    const title = quiz.title

    console.log('q', quiz)
    // setQuestions(extractQuestions(quiz.questions_answers))

    const renderedQuestions = (questions.map((question, i) => {
        return (<Question question={question} answers={answers[i]} />)
    })
    )

    return (
        <div className='quiz-container'>
            <h1 className='quiz-title'>{title}</h1>
            <p className='description-text'>{quiz.description}</p>
            <p className='score'>Score: {quiz.score}</p>
            <Date created={quiz.created} modified={quiz.modified} />
            {renderedQuestions}

            {editBtn}
        </div>
    )
}

export default DisplayQuiz
