var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var imageObj1 = new Image();
var imageObj2 = new Image();

function addImage() {
  context.drawImage(imageObj1, 69, 50);
}

function add2Image() {
  context.drawImage(imageObj2, 80, 90);
}
imageObj1.src = 'http://www.html5canvastutorials.com/demos/assets/darth-vader.jpg';
imageObj2.src = 'http://canyongatedental.com/wp-content/uploads/2016/09/ADA-Logo-650x230.png';

function downloadCanvas(link, canvasId, filename) {
    link.href = document.getElementById(canvasId).toDataURL();
    link.download = filename;
}

///////////////////////////
$('#pic1').change(function() {
  var fr = new FileReader;

  fr.onload = function() {
    var img = new Image;
    img.onload = function() {
      context.drawImage(img,0,0,500,500);
    }
    img.src = fr.result;
  };
  fr.readAsDataURL(this.files[0]);
});
