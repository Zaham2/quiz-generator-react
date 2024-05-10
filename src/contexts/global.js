import React, { useState, createContext, useEffect, useContext } from 'react';
import fetchData from '../services/data';


// const globalData = fetchData();
export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [data, setData] = useState(localStorage.getItem('quizzes') ? JSON.parse(localStorage.getItem('quizzes')) : []);

    useEffect(() => {
        localStorage.getItem('quizzes') 
    }, [data])

    // const createQuiz = (newData) => {
    //     setData([...data, newData]);
    // };

    const updateData = (id, updatedData) => {
        setData([...data, updatedData]);
    };

    return (
        // updateQuiz was here
        <GlobalContext.Provider value={{ data, setData, updateData }}> {}
            {children}
        </GlobalContext.Provider>
    )
}
