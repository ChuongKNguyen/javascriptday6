


document.getElementById("fname").onkeyup = function() {myFunction()};

function myFunction() {
    var movie = document.getElementById("fname");
	$.ajax({
	url: "http://www.omdbapi.com/?",
	data: {
	t: movie.value
	},
	dataType: "json",
	success: function(response) {
		$("#movie-title").html(response.Title);
		$("#genre").html(response.Genre);
		$("#years").html(response.Year);
		$("#poster").attr("src", response.Poster);
		$("#plot").html(response.Plot);
	console.log(response);
	}
	});

}
