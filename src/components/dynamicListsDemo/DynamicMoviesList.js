import React, { Component } from "react";
import ImprovedCard from './ImprovedCard.js'; 
 
class DynamicMoviesList extends Component {
  state = {
    movies: [
      { id: "fUbJPciPq", title: "The Godfather", director: "Francis Coppola" },
      { id: "EXN9npPlo", title: "Star Wars", director: "Rian Johnson" },
      { id: "lecqGHnAb", title: "The Shawshank Redemption", director: "Frank Darabont" }
    ]
  }

  deleteMovieHandler = id => {
    const moviesCopy = [...this.state.movies]; // <== notice the spread operator here! Important, to not mutating the original state! Now we mutate a copy of the state.
    const movieIndex = moviesCopy.findIndex(item => item.id === id);
    moviesCopy.splice(movieIndex, 1);
    this.setState({
      movies: moviesCopy
    });
  };
 
  render() {
    // leave this console.log() so we can keep track of our state inside our browser's console
    console.log(this.state.movies);
    return (
      <div>
        {
          this.state.movies.map(item => {
            // some code to be rendered will come here
            return <ImprovedCard key={item.id} {...item} clickToDelete={() => this.deleteMovieHandler(item.id)}/>
          })
        }
      </div>
    );
  }
}
 
export default DynamicMoviesList;