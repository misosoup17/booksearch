var axios = require('axios');

// New York Times API

var nytAPI = "TW7Rhfm2nRlN44EqTpdkOQkCTITTHdDy";

var helpers = {
    runQuery: function(topic, startYear, endYear){

        var queryURL = "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=yourkey"+ nytAPI + "&q=" + topic + "&begin_date=" + startYear + "0101&end_date=" + endYear + "0101";

		return axios.get(queryURL)
			.then(function(response){
                var newResult = [];
                var fullResults = response.data.response.docs;
                var counter = 0;
                for(var i = 0; i < fullResults.length; i++){

					if(counter > 4) {
						return newResults;
					}

					if(fullResults[counter].headline.main && fullResults[counter].pub_date && fullResults[counter].web_url) {
						newResults.push(fullResults[counter]);
						counter++;
					}
				}

				return newResults;
		})

	},


	// This function posts saved articles to our database.
	postArticle: function(title, date, url){

		axios.post('/api/saved', {title: title, date: date, url: url})
		.then(function(results){

			console.log("Posted to MongoDB");
			return(results);
		})
	}

}


// We export the helpers function (which contains getGithubInfo)
module.exports = helpers;
