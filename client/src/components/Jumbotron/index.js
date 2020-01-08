import React from "react";
import "./style.css";

function Jumbotron() {
  return (
    <header className="masthead">
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-12 text-center">
            <h1 className="font-weight-light">Google Book Search</h1>
            <p className="lead">Find your next great read!</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Jumbotron;
