// Results.jsx
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import useStateContext from '../context/StateContextProvider'; // Correct the import path

const Results = () => {
  const { results, loading, getResults, searchTerm } = useStateContext();
  const location = useLocation();

  useEffect(() => {
      switch(location.pathname){
        case '/websearch':
          getResults('/websearch',{
            text: searchTerm,
            safesearch: 'off',
            timelimit: '',
            region: 'wt-wt',
            max_results: 20,
          });
          break;
        case '/imagesearch':
          getResults('/imagesearch', {
            text: searchTerm,
            safesearch: 'off',
            region: 'wt-wt',
            color: '',
            size: '',
            type_image: '',
            layout: '',
            max_results: 100
          });
          break;
        case '/videosearch':
          getResults('/videosearch', {
            text: searchTerm,
            safesearch: 'off',
            timelimit: '',
            duration: '',
            nresolution: '',
            region: 'wt-wt',
            max_results: 50
          });
          break;
        default:
          break;
      }
  }, [searchTerm, location.pathname]);

  console.log(searchTerm)

  if(loading)
    return <>
    <div className='flex justify-center items-center m-0'>
      Loading...
    </div>
    </>;

  switch (location.pathname) {
    case '/websearch':
      return (
        <div className="sm:px-56 flex flex-wrap justify-between space-y-6">
          {results?.result?.map(({href, title}, index) => (
            <div key={index} className="md:w-2/5 w-full">
              <a href={href} target="_blank" rel="noreferrer">
                <p className="text-sm">{href > 30 ? href.substring(0, 30) : href}</p>
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700  ">{title}</p>
              </a>
            </div>
          ))}
        </div>
        );
    case '/imagesearch':
      return (
        <div className="sm:px-56 flex flex-wrap justify-between space-y-6">
          {results?.result?.map(({title, image, url}, index) => (
            <div key={index} className="md:w-2/5 w-full">
              <a href={url} target="_blank" rel="noreferrer">
                <img src={image} alt={title} />
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700  ">{title}</p>
              </a>
            </div>
          ))}
        </div>
      );
    case '/videosearch':
      return (
        <div className="sm:px-56 flex flex-wrap justify-between space-y-6">
          {results?.result?.map((items, index) => (
            <div key={index} className="p-2">
              <ReactPlayer  urls={items.embed_url} controls width="355px" />
            </div>
          ))}
        </div>
      );
    default:
      return 'ERROR';
  }
};

export default Results;
