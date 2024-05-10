import React, { useContext } from 'react'
import { GlobalContext } from '../contexts/global'
import DisplayQuiz from './DisplayQuiz'

const Home = () => {

    const { quizzes } = useContext(GlobalContext)

    const renderedQuizzes = quizzes.map(quiz => {
        return (<DisplayQuiz quiz={quiz} />)
    })

    const newQuizButton = (
        <a href='/create-new-quiz'>
            <button onClick={(e) => { }}>Create New Quiz</button>
        </a>
    )

    return (
        <div className='flex-container'>
            <h1>All Quizzes</h1>
            {renderedQuizzes}
            {newQuizButton}

        </div>
    )
}

export default Home
