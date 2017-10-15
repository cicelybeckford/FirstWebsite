var slideIndex = 0;
var myimage = document.getElementById("photo");
var slideshowimages = ["placeholder.jpg", "placeholder2.jpg", "placeholder3.jpg"];
var pages = ["website.html", "courses.html", "projects.html", "hobbies.html", "friends.html"];
var slideshowinterval = setInterval(showSlides,5000);
usertest();

function showSlides() 
{
	photo.setAttribute("src", slideshowimages[slideIndex]);
	slideIndex++;
	if (slideIndex >= slideshowimages.length)
	{
		slideIndex = 0;
	}
}

function toggleMenu()
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

function leftArrowkey()
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

function rightArrowkey()
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
	evt = evt || window.event;
	switch (evt.keyCode)
	{
		case 37: 
			leftArrowkey();
			break;
		case 39:
			rightArrowkey();
			break;
	}
};

function usertest() 
{
   this.addEventListener("mousemove", resetTimer, false);
   this.addEventListener("keypress", resetTimer, false);
   this.addEventListener("wheel", resetTimer, false);
   this.addEventListener("click", resetTimer, false);
   startTimer();
}
 
function startTimer() 
{
  menutoggle = window.setTimeout(toggleMenu, 30000);
}

function resetTimer(evt) 
{
  window.clearTimeout(menutoggle);
  startTimer();
}
 