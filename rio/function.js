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
        var sourceX = img.width/2 - canvas.width/2;
        var sourceY = img.height/2 - canvas.height/2;
        var sourceWidth = canvas.width;
        var sourceHeight = canvas.height;
        var destWidth = sourceWidth;
        var destHeight = sourceHeight;
        var destX = canvas.width / 2  - destWidth / 2;
        var destY = canvas.height / 2 - destHeight / 2;
        if(img.width < canvas.width || img.height < canvas.height ){
          context.drawImage(img,0,0,500,500);
        }else{context.drawImage(img, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);};
        
    }
    img.src = fr.result;
  };
  fr.readAsDataURL(this.files[0]);
});

////////////////////////////
  var downloadImg = canvas.toDataURL("image/png");
  download = document.getElementById('canvas-download');
  download.addEventListener('click', function() {
    var data = canvas.toDataURL();
    download.href = data;
  }, false);
