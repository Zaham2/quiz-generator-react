import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import EditQuiz from './pages/EditQuiz';
import QuizForm from './pages/forms/QuizForm';
import QuestionForm from './pages/forms/QuestionForm';
import AnswerForm from './pages/forms/AnswerForm';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/new/quiz' element={<QuizForm />} />
        <Route path='/new/question' element={<QuestionForm />} />
        <Route path='/new/answer' element={<AnswerForm />} />
        <Route path='/edit/:id' element={<EditQuiz />} />
      </Routes>  
    </BrowserRouter>
  );
}

export default App;
