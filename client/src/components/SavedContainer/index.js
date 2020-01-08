import React, { Component } from "react";
import axios from "axios";
import API from "../../utils/API"


class SavedContainer extends Component {

  // state = {
  //   books: [],
  //   title: "",
  //   authors: "",
  //   description: "",
  //   image: "",
  //   infoLink: "",
  //   previewLink: ""
  // };

  constructor(props) {
    super(props);
    this.state = { books: [] };
  }

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    axios.get("/api/books")
      .then(res => this.setState({ books: res.data }))
      // console.log(res.data[0].title)
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    axios.delete("/api/books/" + id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };


  render() {
    //console.log(this.state.books)
    let bookList = this.state.books || {};
    //console.log(bookList)
    return (
      <>
        <span>{bookList.map( object => {
          console.log(object)
          return (
            <>
              <div key={object._id} data={object}>
                <h1>{object.title}</h1>
                <h2>{object.authors}</h2>
                <img src={object.image} alt="book" />
                <p >{object.description}</p>
                <span>
                  <a href={object.previewLink}><span>Preview Link </span></a>|
                        <a href={object.infoLink}><span> Info Link </span></a>|
                  <span> Delete</span>
                </span>
              </div>
            </>
          )
        })}</span>
      </>
    )
  }
}

export default SavedContainer;