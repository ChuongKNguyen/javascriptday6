var jukebox = new Jukebox()
$(document).ready(function(){
	$(".play").click(function(){
		jukebox.play()
	})

	$(".stop").click(function(){
		jukebox.stop()
	})

	$(".forward").click(function(){
		console.log("click forward")
		jukebox.forward()
	})

	$(".load").click(function(){
		console.log("load")
		jukebox.load()
	})
})
currentsong=0
songs=["music/AtLast-EttaJames.mp3","music/Royals-Lorde.mp3","music/SkinnyLove-Birdy.mp3"]

function Jukebox(){
	

	this.play= function(){
		var audio=$("audio")[0]
		audio.src=songs[currentsong]
		audio.play()
		console.log("play")
	}

	this.forward= function(){
		var audio=$("audio")[0]
		console.log("currentsong "+currentsong+1)
		if (currentsong+1>=songs.length){ //because the currentsong start from 0 
			currentsong=0
			console.log("reset 0")
			audio.src=songs[currentsong]
			audio.play()
		} 
		else {
			currentsong=currentsong+1
			audio.src=songs[currentsong]
			console.log("next "+currentsong)
			console.log("next "+songs[currentsong])
			audio.play()

		}
	}

	this.stop= function(){
		$("audio")[0].pause()
		console.log("stop")
	}

	this.load=function(){
		var songUrl=$("#songUrl").val()
		console.log(songUrl)
		songs.push(songUrl)
		console.log(songs)
	}	
}

//example links to enter 
//http://www.stephaniequinn.com/Music/Canon.mp3
//http://www.stephaniequinn.com/Music/Mozart%20-%20Presto.mp3


