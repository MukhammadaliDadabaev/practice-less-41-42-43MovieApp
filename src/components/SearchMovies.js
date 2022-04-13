import React, { Component } from "react";

class SearchMovies extends Component {
  state = {};
  render() {
    return (
      <div className="search-bar">
        <input type="search" name="search" autoComplete="off" required />
        <button className="search-btn" type="submit">
          <span>Search</span>
        </button>
      </div>
    );
  }
}

export default SearchMovies;
