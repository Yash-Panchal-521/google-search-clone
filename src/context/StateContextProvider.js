// StateContextProvider.jsx
import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const baseUrl = 'https://google-api31.p.rapidapi.com';

export const StateContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const getResults = async (url, postData) => {
    setLoading(true);

    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '63f556ab0fmsh04193509119c204p113432jsn79d3e4d7b92f',
        'X-RapidAPI-Host': 'google-api31.p.rapidapi.com'
      },
      body: JSON.stringify(postData),
    };

    try {
      const res = await fetch(`${baseUrl}${url}`, options);
      const data = await res.json();

      setResults(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <StateContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, loading }}>
      {children}
    </StateContext.Provider>
  );
};

const useStateContext = () => useContext(StateContext);

export default useStateContext;
