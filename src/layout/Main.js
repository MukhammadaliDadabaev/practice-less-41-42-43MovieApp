import React, { Component } from "react";

import Movies from "../components/Movies";

class Main extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetch(
      "http://www.omdbapi.com/?i=tt3896198&apikey=46217bcb&s=Batman"
    )
      .then((respons) => respons.json())
      .then((data) => this.setState({ movies: data.Search }));
  }
  render() {
    return <div className="container">
        <Movies movies={this.state.movies}/>
    </div>;
  }
}

export default Main;
