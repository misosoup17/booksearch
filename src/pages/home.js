import React, { Component } from "react";
import Axios from "axios";

class home extends Component {
  state = {
    searchTitle: ""
  };
  handleTyping = event => {
    console.log("what we typed", event.target.value);
    this.setState({ searchTitle: event.target.value });
  };

  handleSearch = () => {
    Axios.get(
      "https://www.googleapis.com/books/v1/volumes?q=" + this.state.searchTitle
    ).then(function(data) {
      console.log(data);
    });
  };

  render() {
    console.log("this is our state!", this.state);
    return (
      <div>
        <h1>"hello!"</h1>
        <input onChange={this.handleTyping}></input>
        <button onClick={this.handleSearch}>Search</button>
      </div>
    );
  }
}

export default home;
