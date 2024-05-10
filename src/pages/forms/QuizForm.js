import React, { useContext, useEffect, useState } from 'react';
import QuestionForm from './QuestionForm';
import TextInput from '../../components/form/TextInput';
import { GlobalContext } from '../../contexts/global';
import { Quiz } from '../../models/Quiz';

function QuizForm() {
  const [quiz, setQuiz] = useState({
    created: '',
    description: '',
    id: null,
    modified: '',
    questions_answers: [],
    score: 0,
    title: '',
    url: '',
  });

  const { data, setData } = useContext(GlobalContext)

  const handleChange = (event) => {

    setQuiz({
      ...quiz,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    localStorage.setItem('quizzes', JSON.stringify(data));
  }, [data])

  const handleSubmit = (event) => {
    event.preventDefault();
    setData([...data, quiz]);

  };

  return (
    <div>
      <form className='form' onChange={handleChange} onSubmit={handleSubmit}>
        <h1>Create New Quiz</h1>
        <TextInput label='Created' name='created' onChange={(e) => {}} />
        <TextInput label='Description' name='description' onChange={(e) => {}} />
        <TextInput label='Modified' name='modified' onChange={(e) => {}} />
        {/* <QuestionForm /> */}
        <TextInput label='Score' name='score' onChange={(e) => {}} />
        <TextInput label='Title' name='title' onChange={(e) => {}} />
        <TextInput label='URL' name='url' onChange={(e) => {}} />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default QuizForm;