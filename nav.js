function loadDiv(event, link) {
	/*
	Load the html contents of the page selected by the 
	user into the content div.
	*/
	
	//Get div
	var content_div = document.getElementById("content_div");
	
	//Check if we are loading a pdf instead of html
	if (link.indexOf(".pdf") !== -1){
		content_div.innerHTML = `<iframe src="${link}" style="border:0px #FFFFFF none;" 
									name="CV" scrolling="no" frameborder="1" 
									marginheight="0px" marginwidth="0px" height="1195" 
									width="100%"></iframe>`;
	}
	else {
		 content_div.innerHTML = `<iframe width="100%" height="100%" 
										frameborder="0" src="${link}"></iframe>`;
	}
	
	//Update nav bar to show selected item
	swapClasses(event, link);
}

function swapClasses(event, link) {
	/*
	Swap the navigation button classes
	to select the new one.
	*/
	
	//Start with old
	document.getElementsByClassName("current")[0].className = "not_current";
	
	//Now update new
	document.getElementById(event).className = "current";
}

function clearDiv() {
	/*
	When the user selects to return to the homepage, clear
	the content div of all inner html. Currently unused.
	*/
	
	//Get div
	var content_div = document.getElementById("content_div")
	
	//Now set HTML within div to nothing
	content_div.innerHTML = '';
}