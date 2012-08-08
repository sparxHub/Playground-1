// Track if the animation is playing or not
var playing = false;

// Called when the animation is complete
// Changes reference to denote animation is not playing
function doSunComplete()
{
	playing = false;	
}

// Called when the mouse moves over the sun
// Animates the sun across the screen
// Uses the GreenSock tweening library
function doSunMove()
{
	var sun = null;
	
	// Do not run animation if already playing
	if( !playing )
	{
		// Reference to the sun
		sun = document.querySelector( '#sun' );
		
		// Note that the animation is playing
		playing = true;
		
		// Animate the sun across the screen
		// Two seconds
		// CSS left property
		// Call custom function when complete
		TweenLite.to( 
			sun,
			2,
			{
				css: {
					left: ( window.innerWidth - sun.clientWidth ) + 'px'	
				},
				ease: Cubic.easeInOut,
				onComplete: doSunComplete
			}
		);		
	}	
}

// Called when the page has loaded
// Configures required event handlers
function doWindowLoad()
{
	var sun = null;
	
	// Listen for the mouse to move over the sun
	sun = document.querySelector( '#sun' );
	sun.addEventListener( 'mouseover', doSunMove );	
}

// Capture when the page has loaded
window.onload = doWindowLoad;