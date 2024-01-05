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

##ScreenShots

![image](https://github.com/Yash-Panchal-521/google-search-clone/assets/92858465/ce95247a-fe04-4e56-8683-c8c9d5389d87)
![image](https://github.com/Yash-Panchal-521/google-search-clone/assets/92858465/8572bacd-3236-49da-a9a9-353a44fa4de1)
![image](https://github.com/Yash-Panchal-521/google-search-clone/assets/92858465/290997b8-59c9-4bfa-af57-229e8a06cb92)
![image](https://github.com/Yash-Panchal-521/google-search-clone/assets/92858465/53438d4f-13c0-4600-bd45-96c1eceaa068)
![image](https://github.com/Yash-Panchal-521/google-search-clone/assets/92858465/98a77e25-5f60-47c0-8027-47ac71f183d6)



 
