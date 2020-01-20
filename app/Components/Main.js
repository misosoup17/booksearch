import React, {Component} from 'react';
import Search from '../Components/Children/Search';
import Results from '../Components/Children/Results';
import Saved from '../Components/Children/Saved';

class Main extends Component {
	constructor() {
		super();
		this.state = {
			topic: '',
			startYear: '',
			endYear: ''
		}
		this.setParent=this.setParent.bind(this);
	}
	setParent(topic, startYear, endYear) {
		this.setState({
			topic: topic,
			startYear: startYear,
			endYear: endYear
		});
	}
	getSaved() {
	this.child.getSaved();
}
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="jumbotron">
					<p><em>Search for articles and annotate articles of interest!</em></p>
						<a href="#/search"><button className="btn btn-default">Search</button></a>
						<a href="#/saved"><button className="btn btn-default">Saved Articles</button></a>
						<a href="#/results"><button className="btn btn-default">Results</button></a>
					</div>
			<div className="container-fluid">
				<Search setParent={this.setParent}/>
				<Results
					topic={this.state.topic}
					startYear={this.state.startYear}
					endYear={this.state.endYear}
					getSaved={this.getSaved}
				/>
				<Saved
					ref={instance => { this.child = instance; }}
				/>
			</div>
		</div>
	</div>
		);
	}
}

export default Main;