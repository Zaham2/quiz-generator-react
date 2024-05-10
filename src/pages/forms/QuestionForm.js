import React, { useState } from 'react';
import AnswerForm from './AnswerForm';
import TextInput from '../../components/form/TextInput';

function QuestionForm() {
  const [question, setQuestion] = useState({
    feedback_false: '',
    feedback_true: '',
    id: '',
    text: '',
    answers: [{ id: '', is_true: '', text: '' }],
  });

  const handleQuestionChange = (event) => {
    setQuestion({
      ...question,
      [event.target.name]: event.target.value,
    });
  };

  const handleAnswerChange = (event) => {
    setQuestion({
      ...question,
      answers: [{ ...question.answers[0], [event.target.name]: event.target.value }],
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <TextInput label='Feedback_false' name='feedback_false' onChange={(e) => {}} />
      <TextInput label='Feedback_true' name='feedback_true' onChange={(e) => {}} />
      <TextInput label='Text' name='text' onChange={(e) => {}} />
      {/* <input type="submit" value="Submit" /> */}
      {/* <AnswerForm /> */}
    </form>
  );
}

export default QuestionForm;
