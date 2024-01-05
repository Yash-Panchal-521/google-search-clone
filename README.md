# Google Search Clone App

## Overview

This is a Google Search Clone app built with React.js, JavaScript, and Tailwind CSS. The app leverages the Google API provided by PR labs through RapidAPI to fetch web search results, images, and videos.

## Features

- Web Search: Get real-time web search results similar to Google.
- Image Search: Explore images related to your search query.
- Video Search: Find videos based on your search term.

## Technologies Used

- React.js: A JavaScript library for building user interfaces.
- Tailwind CSS: A utility-first CSS framework for rapid UI development.
- RapidAPI: Utilized for accessing the Google API provided by PR labs.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/google-search-clone.git
  cd google-search-clone
  npm install

2. Create a RapidAPI account and obtain the API key for the Google API. Replace the placeholder in your code with your API key.
3. Start the development server:

  ```bash
  npm start
  ```
4. Open your browser and navigate to http://localhost:3000 to view the app.

#API Configuration

Visit RapidAPI to obtain your API key. Replace the placeholder in the code with your actual API key.

```
// Replace 'YOUR_API_KEY' with your RapidAPI key in StateContextProvider.js
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'YOUR_API_KEY',
    'X-RapidAPI-Host': 'real-time-web-search.p.rapidapi.com'
  }
};
```
 
