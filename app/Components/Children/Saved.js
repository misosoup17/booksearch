import React, { Component } from 'react';
import Helpers from '../../utils/helpers';
import Panel2 from '../common/Panel2';

class Saved extends Component {
	constructor() {
		super();
		this.state = {
			saved: []
		}
		this.getSaved = this.getSaved.bind(this);
		this.renderSaved = this.renderSaved.bind(this);
	}
	componentDidMount() {
		this.getSaved();
	}
	getSaved() {
		Helpers.getSaved().then((res) => {
			this.setState({ saved: res.data });
		});
	}
  // A helper method for rendering one panel for each quote
  renderSaved() {
    return this.state.saved.map(saved => (
      <Panel2
        saved={saved}
        key={saved._id}
        getSaved={this.getSaved}
      />
    ));
  }
	render() {
		return (
			<div className="container-fluid">
				<div className="panel panel-default">
				  	<div className="panel-heading">
				    	<h3 className="panel-title">Saved Articles</h3>
				  	</div>
				  	<div className="panel-body">
				  		{this.renderSaved()}
				  	</div>
				</div>
			</div>
		);
	}
}

export default Saved;