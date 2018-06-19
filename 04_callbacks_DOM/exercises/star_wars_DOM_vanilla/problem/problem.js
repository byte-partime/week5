(function start(){ //WRAP SHIT IN IIFE
	
//characters
	var jedi = [
		"Luke Skywalker",
		"Obi Wan Kenobi"
	];
	var millenium = [
		"Han Solo",
		"Chewbacca"
	];
	var royalty = "Leia Organa";
	var darkside = "Darth Vader";

//combine characters for falcon
	var heroes = 

//Values for Control Flow with click events
	var time = "arrive";
	var escape = false;

	///////////////////////// Making Your Story /////////////////////////

//target the different DOM elements
	var tatooine = 
	var falcon = 
	var deathStar = 
	var xwing = 

	var findLuke = function(){
		// Make divs that will have the text in the jedi array
		// One div for obi wan and one for luke
		// These divs will have a class called jedi
		// These divs should be appended to tatooine
	};

	var leaveTatooine = function(){
		// Remove Obi Wan and Luke from Tatooine
		// Put Obi Wan, Luke, Han, and Chewy on the Millenium Falcon
		// This will be easier if you combine these two groups using the already defined "heroes" variable up top
		// Give each hero element their own div
		// Give all the newly created divs a class called "heroes"
		// Append all the new heroes divs to the Millenium Falcon
	};

	var findLeia = function(){
		// Remove all characters from the falcon
		// Put them on the Death Star
		// Put Leia on the death Star
		// Leia is in her own variable right now, how can we put her with the other heroes?
		// Give all the heroes their own div elements
		// Append the hero divs to the death star
		// Give all the hero divs a class of "heroes"
	};

	var vaderAndObi = function(){
		// DARTH VADER HAS APPEARED!!! (**Play Christopher Nolan Loud Background Noise**)
		// Obi Wan has been struck down!!!
		// Make a div with the text for Darth Vader inside. 
		// Give that div a class for "vader"
		// Remove Obi Wan from the Death Star
		// Append Darth Vader to the Death Star
		// Remove Obi Wan from the Heroes Array
	};

	var retreat = function(){
		// Obi Wan gave the rest of the heroes time to retreat
		// Remove the heroes from the Death Star
		// Append the heroes to the falcon
		// All heroes must have their own divs
		// All hero divs must have a class "heroes"
	};

	var battle = function(){
		// Leia is safe on another shit
		// Remove her from the falcon
		// Remove Leia from the heroes array
		// Luke is getting in the X-wing
		// Remove him from the falcon
		// Append Luke to the X-wing
		// The Millenium Falcon and the X-wing have destroyed the death star
		// Remove the death star image
	};


////////////////////////////// CLICK EVENTS /////////////////////////////
	tatooine.addEventListener('click', findLuke);
	falcon.addEventListener('click', function(){
		//There are two functions available when a user clicks on the falcon
		// retreat()
		// leaveTatooine()
		// How would you control this so the correct function runs at the correct time
	});
	deathStar.addEventListener("click", function(){
		//There are two functions available when a user clicks on the deathStar
		// findLeia()
		// vaderAndObi()
		// How would you control this so the correct function runs at the correct time
	});
	xwing.addEventListener("click", battle);


}())//END OF IIFE



