import React, { useContext } from 'react'
import { GlobalContext } from '../contexts/global'
import DisplayQuiz from './DisplayQuiz'
import Button from '../components/Button'

const Home = () => {

    const { quizzes } = useContext(GlobalContext)
    const renderedQuizzes = quizzes.map(quiz => {
        return (<DisplayQuiz quiz={quiz} />)
    })

    // const newQuizButton = (
    //     <a href='/create-new-quiz'>
    //         <button onClick={(e) => { }}>Create New Quiz</button>
    //     </a>
    // )

    return (
        <div className='flex-container'>
            <Button text='New Quiz' onclick={() => console.log('new quiz') } />
            <h1 className='app-title'>All Quizzes</h1>
            {renderedQuizzes}

        </div>
    )
}

export default Home
