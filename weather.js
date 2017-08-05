

$.ajax({
	type: "GET",
	url: "http://www.omdbapi.com",
	success: function(data) {
		console.log('success', data)
	}
});

console.log("hiash")