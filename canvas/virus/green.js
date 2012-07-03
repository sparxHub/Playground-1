(function(window) {
greenVirus = function() {
	this.initialize();
}
greenVirus._SpriteSheet = new SpriteSheet({images: ["green.png"], frames: [[0,0,136,126,0,63.25,64.85],[136,0,136,126,0,63.25,64.85],[272,0,136,126,0,63.25,64.85],[408,0,136,126,0,63.25,64.85],[544,0,136,126,0,63.25,64.85],[680,0,136,126,0,63.25,64.85],[816,0,136,126,0,63.25,64.85],[0,126,136,126,0,63.25,64.85],[136,126,136,126,0,63.25,64.85],[272,126,136,126,0,63.25,64.85],[408,126,136,126,0,63.25,64.85],[544,126,136,126,0,63.25,64.85],[680,126,136,126,0,63.25,64.85],[816,126,136,126,0,63.25,64.85],[0,252,136,126,0,63.25,64.85],[136,252,136,126,0,63.25,64.85],[272,252,136,126,0,63.25,64.85],[408,252,136,126,0,63.25,64.85],[544,252,136,126,0,63.25,64.85],[680,252,136,126,0,63.25,64.85],[816,252,136,126,0,63.25,64.85],[0,378,136,126,0,63.25,64.85],[136,378,136,126,0,63.25,64.85],[272,378,136,126,0,63.25,64.85],[408,378,136,126,0,63.25,64.85],[544,378,136,126,0,63.25,64.85],[680,378,136,126,0,63.25,64.85],[816,378,136,126,0,63.25,64.85],[0,504,136,126,0,63.25,64.85],[136,504,136,126,0,63.25,64.85],[272,504,136,126,0,63.25,64.85],[408,504,136,126,0,63.25,64.85],[544,504,136,126,0,63.25,64.85],[680,504,136,126,0,63.25,64.85],[816,504,136,126,0,63.25,64.85],[0,630,136,126,0,63.25,64.85],[136,630,136,126,0,63.25,64.85],[272,630,136,126,0,63.25,64.85],[408,630,136,126,0,63.25,64.85],[544,630,136,126,0,63.25,64.85],[680,630,136,126,0,63.25,64.85],[816,630,136,126,0,63.25,64.85],[0,756,136,126,0,63.25,64.85],[136,756,136,126,0,63.25,64.85],[272,756,136,126,0,63.25,64.85],[408,756,136,126,0,63.25,64.85],[544,756,136,126,0,63.25,64.85],[680,756,136,126,0,63.25,64.85],[816,756,136,126,0,63.25,64.85],[0,882,136,126,0,63.25,64.85],[136,882,136,126,0,63.25,64.85],[272,882,136,126,0,63.25,64.85],[408,882,136,126,0,63.25,64.85],[544,882,136,126,0,63.25,64.85],[680,882,136,126,0,63.25,64.85],[816,882,136,126,0,63.25,64.85],[0,1008,136,126,0,63.25,64.85],[136,1008,136,126,0,63.25,64.85],[272,1008,136,126,0,63.25,64.85],[408,1008,136,126,0,63.25,64.85],[544,1008,136,126,0,63.25,64.85],[680,1008,136,126,0,63.25,64.85],[816,1008,136,126,0,63.25,64.85],[0,1134,136,126,0,63.25,64.85],[136,1134,136,126,0,63.25,64.85],[272,1134,136,126,0,63.25,64.85],[408,1134,136,126,0,63.25,64.85],[544,1134,136,126,0,63.25,64.85],[680,1134,136,126,0,63.25,64.85],[816,1134,136,126,0,63.25,64.85],[0,1260,136,126,0,63.25,64.85],[136,1260,136,126,0,63.25,64.85],[272,1260,136,126,0,63.25,64.85],[408,1260,136,126,0,63.25,64.85],[544,1260,136,126,0,63.25,64.85],[680,1260,136,126,0,63.25,64.85],[816,1260,136,126,0,63.25,64.85],[0,1386,136,126,0,63.25,64.85],[136,1386,136,126,0,63.25,64.85],[272,1386,136,126,0,63.25,64.85],[408,1386,136,126,0,63.25,64.85],[544,1386,136,126,0,63.25,64.85],[680,1386,136,126,0,63.25,64.85],[816,1386,136,126,0,63.25,64.85],[0,1512,136,126,0,63.25,64.85],[136,1512,136,126,0,63.25,64.85]]});
var greenVirus_p = greenVirus.prototype = new BitmapAnimation();
greenVirus_p.BitmapAnimation_initialize = greenVirus_p.initialize;
greenVirus_p.initialize = function() {
	this.BitmapAnimation_initialize(greenVirus._SpriteSheet);
	this.paused = false;
}
window.greenVirus = greenVirus;
}(window));

