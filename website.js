var slideIndex = 0;
showSlides();
var slideshowimages = ["placeholder.jpg", "placeholder2.jpg", "placeholder3.jpg"];
var hobbyimages = ["read.jpg", "sing.jpg", "beyonce.jpg", "friends.jpg", "music.jpg"];
var friendimages = ["friend1.jpeg", "friend2.jpeg", "friend3.jpg"];
var pages = ["website.html", "courses.html", "projects.html", "hobbies.html", "friends.html"];
var birthDate = new Date("Oct 18,2017 00:00:00").getTime();
var slideshowinterval = setInterval(showSlides, 5000);
var countdowninterval = setInterval(countdown, 1000);
activitycheck();

function showSlides()
{
	var myimage = document.getElementById("photo");
	if (myimage)
	{
		var pagepath = window.location.pathname;
		var currentpage = pagepath.split("/").pop();
		if (currentpage == "website.html")
		{
			myimage.setAttribute("src", slideshowimages[slideIndex]);
			slideIndex++;
			if (slideIndex >= slideshowimages.length)
			{
				slideIndex = 0;
			}
		}
		else if (currentpage == "hobbies.html")
		{
			myimage.setAttribute("src", hobbyimages[slideIndex]);
			slideIndex++;
			if (slideIndex >= hobbyimages.length)
			{
				slideIndex = 0;
			}
		}
		else
		{
			 myimage.setAttribute("src", friendimages[slideIndex]);
			 slideIndex++;
			 if (slideIndex >= friendimages.length)
			 {
				 slideIndex = 0;
			 }
		}
	}
}

function showHobbies()
{
	var image = document.getElementById("photo");
	if (image)
	{
		image.setAttribute("src", hobbyimages[hobbyslideIndex]);
		hobbyslideIndex++;
		if (hobbyslideIndex >= hobbyimages.length)
		{
			hobbyslideIndex = 0;
		}
	}
}

function goLeft()
{
	var pagepath = window.location.pathname;
	var currentpage = pagepath.split("/").pop();
  var pageindex = pages.indexOf(currentpage);
	if (pageindex == 0)
	{
		pageindex = 5;
	}
	window.location.replace(pages[pageindex - 1]);
}

function goRight()
{
	var pagepath = window.location.pathname;
	var currentpage = pagepath.split("/").pop();
  var pageindex = pages.indexOf(currentpage);
	if (pageindex == pages.length - 1)
	{
		pageindex = -1;
	}
	window.location.replace(pages[pageindex + 1]);
}

window.onkeydown = function(evt)
{
	var evt = evt || window.event;
	switch (evt.keyCode)
	{
		case 37: 
			goLeft();
			break;
		case 39:
			goRight();
			break;
	}
};

window.onscroll = function(e)
{
	var e = window.event || e;
 	var direction =  window.scrollY;
  document.writeln(direction);
 	if (direction > 1) 
 	{
  	 goLeft();
  }
 	else if (direction <= 1)
 	{
 		 goRight();
 	}
}

function activitycheck() 
{
   this.addEventListener("mousemove", resetTimer, false);
   this.addEventListener("keypress", resetTimer, false);
   this.addEventListener("wheel", resetTimer, false);
   this.addEventListener("click", resetTimer, false);
   startTimer();
}
 
function startTimer() 
{
  menutoggle = window.setTimeout(goRight, 30000);
}

function resetTimer(evt) 
{
  window.clearTimeout(menutoggle);
  startTimer();
}

function countdown() {
	var pagepath = window.location.pathname;
	var currentpage = pagepath.split("/").pop();
	if (currentpage == "friends.html")
	{
		var currentDate = new Date().getTime();
 		var timeRemaining = birthDate - currentDate;
  	var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  	var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  	var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  	var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  	document.getElementById("days").innerHTML = "days: " + days;
  	document.getElementById("hours").innerHTML = "hours: " + hours;
  	document.getElementById("minutes").innerHTML = "minutes: " +  minutes;
  	document.getElementById("seconds").innerHTML = "seconds: " + seconds;
  	if (timeRemaining < 0) {
    	clearInterval(countdowninterval);
    	document.getElementById("days").innerHTML = "HAPPY";
  		document.getElementById("hours").innerHTML = "BIRTHDAY";
  		document.getElementById("minutes").innerHTML = "JORDAN";
  		document.getElementById("seconds").innerHTML = "!";
  	}
	}
}
