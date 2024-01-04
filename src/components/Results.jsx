// Results.jsx
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import useStateContext from '../context/StateContextProvider'; // Correct the import path
// import Loading from './Loading';

const Results = () => {
  const { results, loading, getResults, searchTerm } = useStateContext();
  const location = useLocation();

  useEffect(() => {
    getResults('/search?q=react js');
  }, []);


  console.log(location.pathname);

  switch (location.pathname) {
    case '/search':
      return (
        <div className="sm:px-56 flex flex-wrap justify-between space-y-6">
          {results?.map((index, { url, title }) => (
            <div key={index} className="md:w-2/5 w-full">
              <a href={url} target="_blank" rel="noreferrer">
                <p className="text-sm">{url.length > 30 ? url.substring(0, 30) : url}</p>
                <p className="text-lg hover:underline text-blue-300">{title}</p>
              </a>
            </div>
          ))}
        </div>
      );
    case '/images':
      return 'SEARCH';
    case '/news':
      return 'SEARCH';
    case '/videos':
      return 'SEARCH';

    default:
      return 'ERROR';
  }
};

export default Results;
