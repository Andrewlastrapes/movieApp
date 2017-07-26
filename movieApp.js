var URL = "http://www.omdbapi.com"
var posterAPI = "http://img.omdbapi.com"


var $titleSearch = $("#titleSearch")
var $submit = $(".submit");





$submit.on("click", function(event){
	event.preventDefault();
	getMovieData();
	getPosterData();

})


function data(){
	var object = {};
	
	object["s"] = $titleSearch.val();  
	object["apikey"] = "1ca32dee";
	return object;
}


function getPosterData(){
	$.get(URL, data(), function(dataFromTheServer){
		return dataFromTheServer["Search"][0]["Poster"];
	})
}


function getMovieData(){
	$.get(URL, data(), function(dataFromTheServer){
		return dataFromTheServer
})
}


// getMovieData();


