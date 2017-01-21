$(function() {
  var canvas = $('#the_canvas');
  var context = canvas[0].getContext('2d');

  var pixel = context.createImageData(1,1);
  var data  = pixel.data;
  data[0]   = 0;
  data[1]   = 0;
  data[2]   = 0;
  data[3]   = 255;

  for(var i=0; i<canvas.width(); i++) {
    for(var j=0; j<canvas.height(); j++) {
      if (Math.random() > 0.86) {
        context.putImageData(pixel, i, j);
      }
    }
  }
});
