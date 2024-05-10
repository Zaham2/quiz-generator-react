import React, { useEffect, useState } from 'react';
import TextInput from '../../components/form/TextInput';

function AnswerForm() {

  useEffect(() => {
    localStorage.getItem('answer')
  }, [])

  const [answer, setAnswer] = useState({
    id: '',
    is_true: false,
    text: '',
  });

  const handleChange = (event) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setAnswer({
      ...answer,
      [event.target.name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    localStorage.setItem('answer', JSON.stringify(answer));
  };

  return (
    <form className='form' onChange={handleChange} onSubmit={handleSubmit} >
      <h1>Create Answer Form</h1>
      <TextInput label='Is_true' name='is_true' onChange={(e) => {}} />
      <TextInput label='Text' name='text' onChange={(e) => {}} />
      <input className='form-group' type="submit" value="Submit" />
    </form>
  );
}

export default AnswerForm;
