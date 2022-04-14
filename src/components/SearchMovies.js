import React, { Component } from "react";

class SearchMovies extends Component {
  state = {
    search: "Mask",
  };

  handleMovie = (e) => {
    if (e.key === "Enter") this.props.searchMovie(this.state.search);
  };
  
  render() {
    const { search } = this.state;
    return (
      <div className="search-bar">
        <input
          type="search"
          name="search"
          autoComplete="off"
          required
          value={search}
          onChange={(e) => {
            this.setState({ search: e.target.value });
          }}
          onKeyDown={this.handleMovie}
        />
        <button className="search-btn" type="submit">
          <span>Search</span>
        </button>
      </div>
    );
  }
}

export default SearchMovies;
