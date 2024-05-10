import logo from './logo.svg';
import './App.css';
import QuizContainer from './components/QuizContainer';
import { useEffect, useState } from 'react';
import fetchData from './services/data';

function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    setData(fetchData())
  }, [])
  return (
    <div>
      <QuizContainer>

      </QuizContainer>
    </div>
  );
}

export default App;
