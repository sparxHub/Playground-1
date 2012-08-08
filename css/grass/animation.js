// Called when the animation ends
// Displays an informational message
function doSunEnd()
{
	var sun = null;
	
	sun = document.querySelector( '#sun' );
	
	// Remove animation events
	// Firefox
	sun.style.MozAnimation = '';
	sun.removeEventListener( 'animationstart', doSunStart );
	sun.addEventListener( 'animationiteration', doSunIteration );	
	sun.addEventListener( 'animationend', doSunEnd );
	
	// WebKit
	sun.style.webkitAnimation = '';	
	sun.removeEventListener( 'webkitAnimationStart', doSunStart );
	sun.removeEventListener( 'webkitAnimationIteration', doSunIteration );	
	sun.removeEventListener( 'webkitAnimationEnd', doSunEnd );		
	
	console.log( 'End' );	
}

// Called when the animation completes an iteration
// Displays an informational message
// Iteration here is across and back
function doSunIteration()
{
	console.log( 'Iteration' );	
}

// Called when the mouse is over the sun
// Animates the sun across the screen
function doSunOver()
{
	var sun = null;
	
	// Reference to the item to animate
	sun = document.querySelector( '#sun' );	
	
	// Set animation rules to reflect screen width
	// Brute force approach is used here
	// You really should iterate through rules
	document.styleSheets[1].cssRules[0].deleteRule( '50%' );
	document.styleSheets[1].cssRules[0].insertRule( '50% {' +
		'left: ' +
		( window.innerWidth - sun.clientWidth ) +
		'px; ' +
		'top: -50px; ' +
		( sun.style.MozAnimation == null ? '-webkit-' : '-moz-' ) +
		'transform: rotate( 360deg );' +
		'}' );
	
	// Set the animation in motion
	sun.style.MozAnimation = 'across 4s ease-in-out 0s 5 alternate';
	sun.style.webkitAnimation = 'across 4s ease-in-out 0s 5 alternate';	
	
	// Listen for events that happen during the animation
	// Firefox
	sun.addEventListener( 'animationstart', doSunStart );
	sun.addEventListener( 'animationiteration', doSunIteration );	
	sun.addEventListener( 'animationend', doSunEnd );
	
	// WebKit
	sun.addEventListener( 'webkitAnimationStart', doSunStart );
	sun.addEventListener( 'webkitAnimationIteration', doSunIteration );	
	sun.addEventListener( 'webkitAnimationEnd', doSunEnd );	
}

// Called when the animation starts
// Displays an informational message
function doSunStart()
{
	console.log( 'Start' );	
}

// Called when the page has loaded
// Configures event listeners
function doWindowLoad()
{
	var sun = null;
	
	// Watch for the mouse to be over the sun	
	sun = document.querySelector( '#sun' );
	sun.addEventListener( 'mouseover', doSunOver );
}

// Catch when the page has loaded
window.onload = doWindowLoad;