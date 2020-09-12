var can = document.getElementById("canvas");
var ctx = can.getContext("2d");

can.addEventListener('mousemove', function(e){
  var mouse = getMouse (e, can);
  redraw(mouse);
}, false);

function redraw(mouse){
  console.log('a');
  var img = document.getElementById('img_1');
  can.width = can.width;
  ctx.drawImage(back, 0, 0);
  ctx.beginPath();
  ctx.rect(0, 0, 1200, 796);
  ctx.arc(mouse.x, mouse.y, 70, 0, Math.PI*2, true);
  ctx.clip();
  ctx.drawImage(img, 0, 0);
}

var back = new Image();
back.onload = function() {
    redraw({x: -500, y: -500});
}

back.src = './bitmap.png';

function getMouse(e, canvas) {
    var element = canvas,
        offsetX = 0,
        offsetY = 0,
        mx, my;

// Compute the total offset. It's possible to cache this if you want

if (element.offsetParent !== undefined) {
   do {
   offsetX += element.offsetLeft;
   offsetY += element.offsetTop;
  } while ((element = element.offsetParent));
}

 mx = e.pageX - offsetX;
 my = e.pageY - offsetY;

 // We return a simple javascript object with x and y defined
 return {
     x: mx,
     y: my
 };
}
