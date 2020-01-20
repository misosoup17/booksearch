var axios = require('axios');

// New York Times API

var nytAPI = "TW7Rhfm2nRlN44EqTpdkOQkCTITTHdDy";

var helpers = {
    runQuery: function(topic, startYear, endYear){

        var queryURL = "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=yourkey"+ nytAPI + "&q=" + topic + "&begin_date=" + startYear + "0101&end_date=" + endYear + "0101";

		var queryURL = queryURLBase + topic;
		if (parseInt(startYear)) {
			queryURL = queryURL + "&begin_date=" + startYear + "0101";
		}
		if (parseInt(endYear)) {
			queryURL = queryURL + "&end_date=" + endYear + "0101";
		}
		return axios.get(queryURL);
	},
	saveArticle: (title, url) => {
		return axios.post('/api/saved', {title: title, url: url});
	},
	getSaved: () => {
	return axios.get('/api/saved');
	},
	deleteArticle: (id) => {
		return axios.delete(`/api/saved/${id}`);
	},
};

export default Helpers;