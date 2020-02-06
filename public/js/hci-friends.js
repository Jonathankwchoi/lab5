'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})



/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");
	$(".names").click(anagrammedName);
}

/*function justToSeeIfThisWorks(e){
	e.preventDefault();
	console.log("This works");
}*/

function anagrammedName(e) {
	// Thanks, Internet Anagram Server!
	e.preventDefault();
	name = $(this).text();
	//console.log(name);
	
	if (name == "Doug Engelbart") {
		$(this).text("Notable Grudge");
	} 
	else if (name == "Ivan Sutherland") {
		$(this).text("Vandal Heist Run");
	}
	else if (name == "JCR Licklider") {
		$(this).text("Crick Rid Jell");
	}
	else if (name == "Vannevar Bush") {
		$(this).text("Ravens Van Hub");
	}
	else if (name == "Alan C. Kay") {
		$(this).text("Canal Yak");
	}
	else if (name == "Allen Newell") {
		$(this).text("Ellen All New");
	}
	else if (name == "Lucy Suchman") {
		$(this).text("Lunacy Chums");
	}
	else if (name == "Grace Hopper") {
		$(this).text("Gear Chopper");
	}
	else {
		console.log(name + " not known for anagramming.");
		return name;
	}
}