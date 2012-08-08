// Called when the animation has ended
// Here it only cleans up a little
// Alternatively might take next actions
function doSunEnd()
{
	var sun = null;
	
	// Remove event listener
	sun = document.querySelector( '#sun' );
	sun.removeEventListener( 'webkitTransitionEnd', doSunEnd );
	
	// Visual notification
	alert( 'Next animation...' );
}

// Called when the mouse is over the sun
// Animates the sun across the screen
function doSunOver()
{
	var sun = null;
	
	sun = document.querySelector( '#sun' );
	
	// Change the desired CSS styles
	// Everything else is taken care of for you
	// This includes being CPU friendly
	sun.style.left = ( window.innerWidth - sun.clientWidth ) + 'px';	
	sun.style.MozTransform = 'rotate( 360deg )';
	sun.style.webkitTransform = 'rotate( 360deg )';
	
	// Alternatively listen for the end of the animation
	// Might use this to string events together
	sun.addEventListener( 'transitionend', doSunEnd );	
	sun.addEventListener( 'webkitTransitionEnd', doSunEnd );
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