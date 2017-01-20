


document.getElementById("fname").onkeyup = function() {myFunction()};

function myFunction() {
    var movie = document.getElementById("fname").value;
	$.ajax({
		url: "http://www.omdbapi.com/?",
		data: {t: movie},
		dataType: "json",
		success: function(response) {
			$("#movie-title").html(response.Title);
			$("#genre").html(response.Genre);
			$("#years").html(response.Year);
			$("#poster").attr("src", response.Poster);
			$("#plot").html(response.Plot);
		console.log(response);
		if (response.Response=="False"){
			alert(response.Error)
		}
		},
		 // error: function (jqXHR, exception) {
   //      var msg = '';
   //      if (jqXHR.status === 0) {
   //          msg = 'Not connect.\n Verify Network.';
   //      } else if (jqXHR.status == 404) {
   //          msg = 'Requested page not found. [404]';
   //      } else if (jqXHR.status == 500) {
   //          msg = 'Internal Server Error [500].';
   //      } else if (exception === 'parsererror') {
   //          msg = 'Requested JSON parse failed.';
   //      } else if (exception === 'timeout') {
   //          msg = 'Time out error.';
   //      } else if (exception === 'abort') {
   //          msg = 'Ajax request aborted.';
   //      } else {
   //          msg = 'Uncaught Error.\n' + jqXHR.responseText;
   //      }
   //      $('#plot').html(msg);
   //  },
		error: function () {
			console.log("ERROR");
			$('#plot').text('An error occurred');
	}
});
}
