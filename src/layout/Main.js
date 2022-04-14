import React, { Component } from "react";

import Movies from "../components/Movies";
import SearchMovies from "../components/SearchMovies";

class Main extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetch(
      "https://www.omdbapi.com/?i=tt3896198&apikey=46217bcb&s=Mask"
    )
      .then((respons) => respons.json())
      .then((data) => this.setState({ movies: data.Search }));
  }

  searchMovie = (text) => {
    fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=46217bcb&s=${text}`)
      .then((respons) => respons.json())
      .then((data) => this.setState({ movies: data.Search }));
  }
  
  render() {
    return (
      <div className="container">
        <SearchMovies searchMovie={this.searchMovie}/>
        <Movies movies={this.state.movies} />
      </div>
    );
  }
}

export default Main;
