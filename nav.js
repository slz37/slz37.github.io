function loadDiv(ev, page) {
	/*
	Transitions the div from the previous page
	to the new page with fade out/in affects.
	*/
	
	//Get div
	var content_div = document.getElementById("content_div");
	
	//Change class to fade out transition
	content_div.className = 'hide';
	
	//Wait until transition and then change content
	window.setTimeout(setContent, 1000, page, content_div);
	
	//Wait for transition and change class back to fade in
	window.setTimeout(function() {content_div.className = 'show'}, 1000);
	
	//Update nav bar to show selected item
	swapClasses(ev);
}

function setContent(page, content_div) {
	/*
	Sets the content of the div to the content of the selected
	page.
	*/

	//Check if loaded page is a pdf file
	if (page.indexOf(".pdf") !== -1){
		/*
		Hardcoded height for now. To do: make this automatic
		for any PDF file in the future.
		*/
		
		content_div.innerHTML = `<iframe src="${page}"
									id="pdfFrame"
									style="border:0px #FFFFFF none;" 
									name="CV" scrolling="no" frameborder="1" 
									marginheight="0px" marginwidth="0px" 
									height="2324px"
									width="100%"></iframe>`;
	}
	else{
		$(content_div).load(page);
	}
}

function swapClasses(ev) {
	/*
	Swap the navigation button classes
	to select the new one.
	*/
	
	document.getElementsByClassName("current")[0].className = "not_current";
	document.getElementById(ev).className = "current";
}

function clearDiv() {
	/*
	When the user selects to return to the homepage, clear
	the content div of all inner html. Deprecated.
	*/
	
	//Get div
	var content_div = document.getElementById("content_div")
	
	//Now set HTML within div to nothing
	content_div.innerHTML = '';
}