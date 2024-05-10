import React, { useState, createContext } from 'react';
import fetchData from '../services/data';


const globalData = fetchData();
export const GlobalContext = createContext(globalData);

export const GlobalProvider = ({ children }) => {
    const [data, setData] = useState(globalData);

    const createQuiz = (newData) => {
        setData((prevData) => [...prevData, newData]);
    };

    // const readData = (id) => {
    //     return quizzes.find((item) => item.id === id);
    // };

    const updateQuiz = (id, updatedData) => {
        setData((prevData) => prevData.map((item) => (item.id === id ? updatedData : item)));
    };

    // const deleteData = (id) => {
    //     setQuiz((prevData) => prevData.filter((item) => item.id !== id));
    // };

    return (
        <GlobalContext.Provider value={{quizzes: data, createQuiz, updateQuiz }}>
            {children}
        </GlobalContext.Provider>
    )
}
