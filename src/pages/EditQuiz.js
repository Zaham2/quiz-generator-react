import React, { useContext, useEffect } from 'react'
import TextInput from '../components/form/TextInput'
import { GlobalContext } from '../contexts/global'

const EditQuiz = (props) => {

  useEffect(() => {
    const localStorageQuizzes = localStorage.getItem('quizzes')
    console.log('props',props)
    // setCurrentQuiz(JSON.parse(localStorageQuizzes).find(quiz => quiz.id === props.quiz?.id)) 
  }, [])

  const { quizzes, updateData } = useContext(GlobalContext)

  onsubmit = (e) => {
    e.preventDefault()
    updateData(e.target.value, props.quiz)
  }

  return (
    <form>
      <TextInput label='Set ID' name={'id'} onChange={props.onChange} />
      <input type='submit' value={'Submit'} />
    </form>
  )
}

export default EditQuiz
