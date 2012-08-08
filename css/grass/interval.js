// Constants
var FRAME_RATE = 45;
var MOVE_RATE = 3;

// Track loop doing the animation
var interval = null;

// Called when an animation frame elapses
// Moves the sun further across the sky if needed
// Otherwise stops the animation
function doSunMove()
{
	var sun = null;
	
	// Reference to the sun
	sun = document.querySelector( '#sun' );
	
	// If there is space to move
	if( sun.offsetLeft < ( window.innerWidth - sun.width ) )
	{
		sun.style.left = ( sun.offsetLeft + MOVE_RATE ) + 'px';		
	} else {
		// At the far edge so stop animation
		clearInterval( interval );
		interval = null;		
	}	
}

// Called when the mouse goes over the sun
// Starts the animation
function doSunOver()
{
	// Only animate if not currently animating
	if( interval == null )
	{
		interval = setInterval( doSunMove, FRAME_RATE );
	}
}

// Called when the page has loaded
// Configures event listener on the sun
function doWindowLoad()
{
	var sun = null;
	
	// Listen for mouse movement
	sun = document.querySelector( '#sun' );	
	sun.addEventListener( 'mouseover', doSunOver );
}

// Catch the page load event
window.onload = doWindowLoad;