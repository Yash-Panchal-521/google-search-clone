// StateContextProvider.jsx

import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const baseUrl = 'https://real-time-web-search.p.rapidapi.com';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '0021d30470msh5d124867a07671bp137071jsn49da2a79f549',
    'X-RapidAPI-Host': 'real-time-web-search.p.rapidapi.com',
  },
};

export const StateContextProvider = ({ children }) => {
  const [results, setResults] = useState([]); // Initialize results as an empty array
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const getResults = async (url) => {
    setLoading(true);

    const res = await fetch(`${baseUrl}${url}`, options);

    const data = await res.json();
    console.log(data);

    setResults(data.results); // Assuming the results property is an array in the response
    setLoading(false);
  };

  return (
    <StateContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, loading }}>
      {children}
    </StateContext.Provider>
  );
};

const useStateContext = () => useContext(StateContext);

export default useStateContext;
