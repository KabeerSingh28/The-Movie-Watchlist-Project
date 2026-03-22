# Movie Watchlist Web App

## Project Overview

The Movie Watchlist Web App is a dynamic web application that allows users to search for movies and manage a personalized watchlist.  
It fetches real-time movie data from a public API and provides an interactive UI for exploring and saving movies.

## Features

### Live Movie Search  
Search for movies using keywords and get instant results from the API.

### Watchlist Management  
Add or remove movies from your personal watchlist.

### Empty State Handling  
Displays user-friendly messages when no movies are found or the watchlist is empty.

### Responsive Design  
Works smoothly on mobile, tablet, and desktop devices.

### (Planned) Dark Mode Toggle  
Switch between light and dark themes for better user experience.

### (Planned) Sorting & Filtering  
Sort movies by year, rating, or title using JavaScript array methods.

## API Used

OMDb API (Open Movie Database)  
Provides movie details such as title, poster, year, and ratings.  
https://www.omdbapi.com/


## How It Works

1. User enters a movie name in the search bar  
2. The app fetches data from the OMDb API using fetch()  
3. Results are displayed dynamically on the screen  
4. User can:  
   - Add movies to watchlist  
   - Remove movies from watchlist  
5. Watchlist is saved in browser using local storage  

## Project Structure


movie-watchlist/
│── index.html
│── style.css
│── script.js
│── README.md


## Concepts Used

Fetch API for asynchronous data handling  

Array Higher Order Functions:  
- map() – to display movie data  
- filter() – for searching  
- sort() – for sorting results  

DOM Manipulation  
Event Handling  

## Future Enhancements

Random Movie Generator  
Debounced Search  
Pagination for large results  
Favorite Movies Section  
Movie Rating Filters  