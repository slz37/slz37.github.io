function loadDiv(link) {
	/*
	Load the html contents of the page selected by the 
	user into the content div.
	*/
	
	//Get div
	var content_div = document.getElementById("content_div")
	
	//Check if we are loading a pdf instead of html
	if (link.indexOf(".pdf") !== -1){
		content_div.innerHTML = `<TABLE align=left height="100%" width="100%" 
									border="0" cellpadding="0" cellspacing="0">
								<TR>
									<TD valign=top align=center WIDTH="100%" height="1195px">
									<iframe src="${link}" style="border:0px #FFFFFF none;" 
										name="CV" scrolling="no" frameborder="0" 
										marginheight="0px" marginwidth="0px" height="100%" 
										width="100%"></iframe>
									</TD>
								</TR>
								</TABLE>`
	}
	else {
		 content_div.innerHTML = `<iframe width="100%" height="100%" 
										frameborder="0" src="${link}"></iframe>`
	}
}

function clearDiv() {
	/*
	When the user selects to return to the homepage, clear
	the content div of all inner html.
	*/
	
	document.getElementById("content_div").innerHTML = '';
}