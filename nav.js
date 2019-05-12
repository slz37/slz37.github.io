function loadDiv(event, link) {
	/*
	Transitions the div from the previous page
	to the new page with fade out/in affects.
	*/
	
	//Get div
	var content_div = document.getElementById("content_div");
	
	//Change class to fade out transition
	content_div.className = 'hide';
	
	//Wait until transition and then change content
	window.setTimeout(setContent, 1000, event, link);
	
	//Wait for transition and change class back to fade in
	window.setTimeout(function() {content_div.className = 'show'}, 1000);
	
	//Update nav bar to show selected item
	swapClasses(event);
}

function setContent(event, link) {
	/*
	Sets the content of the div to the content of the selected
	page.
	*/
	
	//Check if we are loading a pdf instead of html
	if (link.indexOf(".pdf") !== -1){
		//Set contents
		content_div.innerHTML = `<iframe src="${link}" style="border:0px #FFFFFF none;" 
									name="CV" scrolling="no" frameborder="1" 
									marginheight="0px" marginwidth="0px" height="1195" 
									width="100%"></iframe>`;
	}
	else {
		//Set contents
		 content_div.innerHTML = `<iframe width="100%" height="100%" 
										frameborder="0" src="${link}"></iframe>`;
	}
}

function swapClasses(event) {
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