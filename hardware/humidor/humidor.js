// Constants
var JSONP_CALLBACK = 'doData';
var THING_SPEAK = 'http://api.thingspeak.com/channels/2217/feed/last.json';

// Global tracks interval ID
var update = null;

// Called to load ThingSpeak data via JSONP
// Also removes existing JSONP script blocks
function loadData()
{
	var script = null;

	// Check to see if the interval is configured
	// Setup the interval if it is not configured
	if( update == null )
	{
		update = setInterval( loadData, 30000 );	
	}

	// Get any of the script blocks with 'callback=' in the source attribute
	script = document.querySelectorAll( 'head script[src*="callback="]' );
	
	// Remove any JSONP script blocks that are already in place
	for( var s = 0; s < script.length; s++ )
	{
		script[s].parentNode.removeChild( script[s] );
	}
	
	// Debugging
	// console.log( 'Loading...' );  			
	
	// Request the ThingSpeak channel data via JSONP
	script = document.createElement( 'script' );  
	script.src = THING_SPEAK + '?callback=' + JSONP_CALLBACK;  
	document.getElementsByTagName( 'head' )[0].appendChild( script );
}

// Called when the JSONP request has returned
// Leverages parsed JSON data to populate fields
function doData( json )
{
	var field = null
	
	// Populate the temperature field
	field = document.querySelector( '#temperature > .value' );
	field.innerHTML = Math.round( json.field1 - 10 ) + '&deg;';
	
	// Populate the humidity field
	field = document.querySelector( '#humidity > .value' );
	field.innerHTML = Math.round( json.field2 ) + '%';	
}

// Called when the document has finished loading
// Kicks off JSONP updates
// Runs intial layout based on window size
function doLoad()
{
	// Load the first batch of JSONP data
	loadData();
	
	// Listen for window resizing
	// Perform initial layout	
	window.onresize = doResize;
	doResize();	
}

// Called to layout the user interface
// Centers the main display in the window
function doResize()
{
	var display = null;
	
	// Get a reference to the main display element
	// Position it in the center based on window size
	display = document.querySelector( '#display' );
	display.style.left = Math.round( ( document.body.clientWidth - display.clientWidth ) / 2 ) + 'px';	
	display.style.top = Math.round( ( document.body.clientHeight - display.clientHeight ) / 2 ) + 'px';
}