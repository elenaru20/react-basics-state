import React, { Component } from "react";
import ImprovedCard from './ImprovedCard'; 
 
class DynamicMoviesList extends Component {
    state = {
        movies: [
            { id: "fUbJPciPq", title: "The Godfather", director: "Francis Coppola", hasOscars: true, IMDbRating: 9.2 },
            { id: "EXN9npPlo",  title: "Star Wars", director: "Rian Johnson" , hasOscars: true, IMDbRating: 8.7 },
            { id: "lecqGHnAb",  title: "The Shawshank Redemption", director: "Frank Darabont", hasOscars: false, IMDbRating: 9.3 }
        ],
        showOscarAwarded: false // <== add
    }

    toggleMovies = () => {
        this.setState({ showOscarAwarded: !this.state.showOscarAwarded })
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
        const {showOscarAwarded} = this.state;
        const filteredMovies = this.state.movies.filter(theMovie => theMovie.hasOscars === showOscarAwarded);
        return (
                //     <div>
                //         {
                //         this.state.movies.map(item => {
                //             // some code to be rendered will come here
                //             return <ImprovedCard key={item.id} {...item} clickToDelete={() => this.deleteMovieHandler(item.id)}/>
                //         })
                //         }
                //     </div>
                //     );
                // }
                // }

                <div>
                    {
                        filteredMovies.map(item => {
                            return <ImprovedCard key={item.id} {...item} clickToDelete={() => this.deleteMovieHandler(item.id)} />
                        })
                    }            
                    <button onClick={() => this.toggleMovies() }>
                        {showOscarAwarded ? 'Hide Oscar Awarded' : 'Show Oscar Awarded'}
                    </button>
                </div>
            );
        }
    }
 
export default DynamicMoviesList;
