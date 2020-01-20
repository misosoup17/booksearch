import React, { Component } from "react";
import Helpers from "../../utils/helpers";

class Panel2 extends Component {
	constructor() {
		super();
		this.deleteArticle = this.deleteArticle.bind(this);
	}
	deleteArticle() {
		Helpers.deleteArticle(this.props.id).then(this.props.getSaved);
	}
	render() {
		return (
			<div className="panel panel-default">
	  			<div className="panel-body">
	    			<h4 id="savedListing">
	    				<a href={this.props.saved.url} target="_blank">{this.props.saved.title}</a>
		    			<button
		    				id="deleteButton"
		    				className="btn btn-danger"
		    				onClick={this.deleteArticle}
		    			>
		    				Delete
		    			</button>
	    			</h4>
	  			</div>
			</div>
		);
	}
}

export default Panel2;