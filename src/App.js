import React from 'react';
import './App.css';
 
import Counter from './components/Counter';
 
import Emoji from './components/Emoji';

import { listItems, MoviesList } from "./components/ListDemo";

import DynamicMoviesList from "./components/dynamicListsDemo/DynamicMoviesList.js";
 
function App() {
  return (
    <div className="App">
      <Counter />
      <Emoji/>
      <ul>{listItems}</ul>
      <div>
          <MoviesList />
        </div>
        <hr />
        <DynamicMoviesList />
    </div>
  );
}
 
export default App;

