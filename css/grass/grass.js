// Constants
var BLADE_COUNT = 150;
var GREEN_AMOUNT = 125;
var GREEN_BASE = 100;
var ROTATE_AMOUNT = 10;
var SKEW_AMOUNT = 10;
var WIND_SPEED = 2000;

// Global variables
var xhr = null;

// Called when external SVG asset is loaded
// Creates grass scene at bottom of screen
// Accepts no arguments
// Has no return value
function doAssetLoad()
{
	var blade = null;
	var change = null;
	var clone = null;
	var daytime = null;
	var height = null;
	var rotate = null;
	var skew = null;
	var width = null;
	
	// When the content it loaded
	if( xhr.readyState == 4 )
	{
		// Get the blade of grass from the XML result
		// Result is SVG element
		// Get width and height from SVG representation
		blade = xhr.responseXML.querySelector( '#blade' );
		height = blade.height.baseVal.value;
		width = blade.width.baseVal.value;		
		
		// Get reference to scene in document
		daytime = document.querySelector( '#daytime' );
		
		// Create blades of grass in the scene
		for( var g = 0; g < BLADE_COUNT; g++ )
		{
			// Clone the SVG node
			// Remove the reference ID
			// Randomly position the blade of grass
			clone = blade.cloneNode( true );
			clone.removeAttribute( 'id' );
			clone.style.position = 'absolute';
			clone.style.bottom = ( 0 - Math.round( Math.random() * height ) ) + 'px';
			clone.style.left = Math.round( 
				Math.random() * window.innerWidth ) + 
				( 0 - ( Math.random() * width ) ) +
				'px';
			
			// Determine a random rotation value
			rotate = Math.round( Math.random() * ROTATE_AMOUNT );
			rotate = Math.random() > 0.50 ? 0 - rotate : rotate;
			
			// Determine a random skew value
			skew = Math.round( Math.random() * SKEW_AMOUNT );
			skew = Math.random() > 0.50 ? 0 - skew : skew;			
			
			// Set the CSS transform property with rotation and skew
			// WebKit
			clone.style.webkitTransition = 'all 1s ease-out';
			clone.style.webkitTransformOrigin = 
				Math.round( width / 2 ) + 
				'px ' +
				height + 
				'px';
			clone.style.webkitTransform = 'rotate( ' + 
				rotate + 
				'deg ) skew( ' +
				skew +
				'deg )';
				
			// Account for different browsers
			// Even though it is effectively the same code	
			// Firefox
			clone.style.MozTransition = 'all 1s ease-out';			
			clone.style.MozTransformOrigin = 
				Math.round( width / 2 ) + 
				'px ' +
				height + 
				'px';
			clone.style.MozTransform = 'rotate( ' + 
				rotate + 
				'deg ) skew( ' +
				skew +
				'deg )';				
			
			// Random shade of green for each blade of grass
			// Within a threshold to avoid too extreme colors
			change = clone.querySelectorAll( 'path' )[0];
			change.setAttribute( 'fill', 'rgb( 0, ' +
				( Math.round( Math.random() * GREEN_AMOUNT ) + GREEN_BASE ) + 
				', 0 )' );
				
			// Add the blade of grass to the scene
			daytime.appendChild( clone );			
		}
		
		// Once all the grass has been added to the scene
		// Start the random movement of grass to simulate wind
		timeout = setTimeout( doWindBlow, Math.round( Math.random() * WIND_SPEED ) ); 
	}
}

// Called randomly to move blades of grass
// Accepts no arguments
// Has no return value
function doWindBlow()
{
	var daytime = null;
	var end = null;
	var grass = null;
	var index = null;
	var rotate = null;
	var skew = null;
	var start = null;
	var transform = null;
	
	// Remove the timeout
	clearTimeout( timeout );
	
	// Get the blades of grass
	daytime = document.querySelectorAll( '#daytime > svg' );	
	
	// Determine which element we are going to animate
	index = Math.floor( Math.random() * ( daytime.length - 1 ) );
	
	// Account for different browsers
	// Getting a value from a property that may/not exist
	// Does not throw an error
	// Setting the value is where the error happens
	if( daytime[index].style.webkitTransform )
	{
		transform = daytime[index].style.webkitTransform.split( ' ' );		
	} else {
		transform = daytime[index].style.MozTransform.split( ' ' );		
	}

	// Parse out rotation from transform value
	start = transform[0].indexOf( '(' ) + 1;
	end = transform[0].indexOf( 'd' );
	rotate = parseInt( transform[0].substring( start, end ) );
	
	// If negative then make it positive
	// If positive then make it negative
	if( rotate > 0 )
	{
		rotate = 0 - rotate;	
	} else {
		rotate = Math.abs( rotate );	
	}
	
	// Parse out skew from transform value
	start = transform[1].indexOf( '(' ) + 1;
	end = transform[1].indexOf( 'd' );
	skew = parseInt( transform[1].substring( start, end ) );
	
	// If negative then make it positive
	// If positive then make it negative	
	if( skew > 0 )
	{
		skew = 0 - skew;	
	} else {
		skew = Math.abs( skew );	
	}	
	
	// WebKit
	daytime[index].style.webkitTransform = 'rotate( ' +
		rotate +
		'deg ) skew( ' +
		skew +
		'deg )';
		
	// Firefox
	daytime[index].style.MozTransform = 'rotate( ' +
		rotate +
		'deg ) skew( ' +
		skew +
		'deg )';		
	
	// Play it again some time later
	// Uses timeout for more random result
	timeout = setTimeout( doWindBlow, Math.round( Math.random() * WIND_SPEED ) );
}

// Load external SVG asset as soon as possible
// SVG asset is a blade of grass
// SVG allows for color change
// SVG allows for minimal pixelation during rotation
xhr = new XMLHttpRequest();
xhr.onreadystatechange = doAssetLoad;
xhr.open( 'GET', 'grass.svg' );
xhr.send( null );