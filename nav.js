function loadDiv(link) {
	document.getElementById("content_div").innerHTML = `'<object type="text/html" data="${link}" ></object>'`;
}

function clearDiv() {
	document.getElementById("content_div").innerHTML = '';
}