
var $submit = $(".submit");
var $favorite = $(".favorite");
var URL = "http://www.omdbapi.com"
var posterAPI = "http://img.omdbapi.com"
var $titleSearch = $("#titleSearch")
var $poster = $(".poster")

function buildSearchData(){
	var object = {};
	
	object["s"] = $titleSearch.val();  
	object["apikey"] = "1ca32dee";
	return object;

}


// Create state

var state = {
	poster: null,
	favorites: [],
	current: null
	}



// Actions

function getMovieData(data){
	var promise = new Promise(function(resolve, reject){
		$.get(URL, data, function(dataFromTheServer){
			state.current = dataFromTheServer.Search[0].Title;
			resolve(dataFromTheServer);
		}).fail(function(){
			reject("Couldnt find movie data");
		})
	})
	return promise;
}


function append(c, source,){
	var first = $('<img />', {
		"class": c,
		"src": source
	});
	$(c).empty();
	first.appendTo($(c))
}

function storeFavorite(){
	state.favorites.push(state.current); 
}



function setImage(url){
	 append($poster, url.Search[0].Poster);
}	


// Add listenors 

$submit.on("click", function(event){
	event.preventDefault();
	getMovieData(buildSearchData()).then(function(dataFromTheServer){
	setImage(dataFromTheServer);
	})

});

$favorite.on("click", function(event){
	event.preventDefault();
	storeFavorite()
	localStorage.setItem("title", state.current);
});













































