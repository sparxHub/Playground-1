(function(window) {
blueVirus = function() {
	this.initialize();
}
blueVirus._SpriteSheet = new SpriteSheet({images: ["blue.png"], frames: [[0,0,183,183,0,88,95.65],[183,0,183,183,0,88,95.65],[366,0,183,183,0,88,95.65],[549,0,183,183,0,88,95.65],[732,0,183,183,0,88,95.65],[915,0,183,183,0,88,95.65],[1098,0,183,183,0,88,95.65],[1281,0,183,183,0,88,95.65],[1464,0,183,183,0,88,95.65],[1647,0,183,183,0,88,95.65],[1830,0,183,183,0,88,95.65],[0,183,183,183,0,88,95.65],[183,183,183,183,0,88,95.65],[366,183,183,183,0,88,95.65],[549,183,183,183,0,88,95.65],[732,183,183,183,0,88,95.65],[915,183,183,183,0,88,95.65],[1098,183,183,183,0,88,95.65],[1281,183,183,183,0,88,95.65],[1464,183,183,183,0,88,95.65],[1647,183,183,183,0,88,95.65],[1830,183,183,183,0,88,95.65],[0,366,183,183,0,88,95.65],[183,366,183,183,0,88,95.65],[366,366,183,183,0,88,95.65],[549,366,183,183,0,88,95.65],[732,366,183,183,0,88,95.65],[915,366,183,183,0,88,95.65],[1098,366,183,183,0,88,95.65],[1281,366,183,183,0,88,95.65],[1464,366,183,183,0,88,95.65],[1647,366,183,183,0,88,95.65],[1830,366,183,183,0,88,95.65],[0,549,183,183,0,88,95.65],[183,549,183,183,0,88,95.65],[366,549,183,183,0,88,95.65],[549,549,183,183,0,88,95.65],[732,549,183,183,0,88,95.65],[915,549,183,183,0,88,95.65],[1098,549,183,183,0,88,95.65],[1281,549,183,183,0,88,95.65],[1464,549,183,183,0,88,95.65],[1647,549,183,183,0,88,95.65],[1830,549,183,183,0,88,95.65],[0,732,183,183,0,88,95.65],[183,732,183,183,0,88,95.65],[366,732,183,183,0,88,95.65],[549,732,183,183,0,88,95.65],[732,732,183,183,0,88,95.65],[915,732,183,183,0,88,95.65],[1098,732,183,183,0,88,95.65],[1281,732,183,183,0,88,95.65],[1464,732,183,183,0,88,95.65],[1647,732,183,183,0,88,95.65],[1830,732,183,183,0,88,95.65],[0,915,183,183,0,88,95.65],[183,915,183,183,0,88,95.65],[366,915,183,183,0,88,95.65],[549,915,183,183,0,88,95.65],[732,915,183,183,0,88,95.65],[915,915,183,183,0,88,95.65],[1098,915,183,183,0,88,95.65],[1281,915,183,183,0,88,95.65],[1464,915,183,183,0,88,95.65],[1647,915,183,183,0,88,95.65],[1830,915,183,183,0,88,95.65],[0,1098,183,183,0,88,95.65],[183,1098,183,183,0,88,95.65],[366,1098,183,183,0,88,95.65],[549,1098,183,183,0,88,95.65],[732,1098,183,183,0,88,95.65],[915,1098,183,183,0,88,95.65],[1098,1098,183,183,0,88,95.65],[1281,1098,183,183,0,88,95.65],[1464,1098,183,183,0,88,95.65]]});
var blueVirus_p = blueVirus.prototype = new BitmapAnimation();
blueVirus_p.BitmapAnimation_initialize = blueVirus_p.initialize;
blueVirus_p.initialize = function() {
	this.BitmapAnimation_initialize(blueVirus._SpriteSheet);
	this.paused = false;
}
window.blueVirus = blueVirus;
}(window));

