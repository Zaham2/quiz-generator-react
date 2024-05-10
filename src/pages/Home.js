import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../contexts/global'
import DisplayQuiz from './DisplayQuiz'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'

const Home = () => {


    const navigate = useNavigate()
    useEffect(() => {
        console.log('Home.js')
    }, [])
    

    const { data } = useContext(GlobalContext)
    const renderedQuizzes = data.map(quiz => {
        return (
        <>
            <DisplayQuiz quiz={quiz} />
            <Button text='Edit' onclick={() => navigate(`/edit/${quiz.id}`)} />
        </>)
    })

    return (
        <div className='flex-container'>
            <Button text='Add New Quiz' onclick={() => navigate('/new/quiz') } />
            <Button text='Add New Question' onclick={() => navigate('/new/question') } />
            <Button text='Add New Answer' onclick={() => navigate('/new/answer') } />
            <h1 className='app-title'>All Quizzes</h1>
            {renderedQuizzes}

        </div>
    )
}

export default Home
