$(document).ready(function(){
    $( document ).click(function() {

    	sliding(".circleRow");
    	sliding(".squareRow");

   }); 
});


//  $( ".circleRow" ).animate({
//    "margin-left": "50%"
//  }, 5000)
// })

function sliding(part){

	var position = $(part).css("left");
	console.log(position)


	if (position == "8px" || position == "0px"){
		$(part).animate({left: 650}, 500,
    			function complete() {
    				sliding(part);
    		});
	}
	else {
		$(part).animate({left: 0}, 500,
    			function complete() {
    				sliding(part);
			});    	
	}
}