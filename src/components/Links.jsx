import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { url: '/websearch', text: 'All    ' },
  { url: '/imagesearch', text: 'Images    ' },
  { url: '/videosearch', text: 'Videos    ' },
];

const Links = () => (
  <div className="flex sm:justify-around justify-between items-center mt-4">
    {links.map(({ url, text }) => (
      <NavLink to={url} className="text-blue-300 pb-2 m-2">{text}</NavLink>
    ))}
  </div>
);

export default Links