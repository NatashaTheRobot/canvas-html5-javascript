$(function() {
	var drawDot = function(context, color, x, y) {
		context.fillStyle = color;
		context.fillRect (x, y, 5, 5);
	}
	
	var canvas = $(".drawing-area")[0];
	var context = canvas.getContext("2d");
	
	var mouseclicked = false
	
	$(".drawing-area").mousedown (function(e) {
		mouseclicked = true;
	});
	
	$(".drawing-area").mouseup (function(e) {
		mouseclicked = false;
	});
	
	$(".drawing-area").mousemove (function(e) {
		if(mouseclicked === true) {
			var x = e.pageX;
			var y = e.pageY;
			drawDot(context, '#BADA55', x, y);
		};
	});
	
});