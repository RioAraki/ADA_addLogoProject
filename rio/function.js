var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var logo = new Image();
var background = new Image();

/////////////////////////// add logo functions
function addLogo() {
  context.drawImage(logo,0,0);
}

function addBackground() {
  context.drawImage(background,0,0);
}

logo.src = "https://rioaraki.github.io/addLogo/logo.svg";
background.src = "https://rioaraki.github.io/addLogo/background.svg";
/////////////////////////// picture modification, change pictures that are too small/large to right proportion
$('#pic1').change(function() {
  var fr = new FileReader;

  fr.onload = function() {
    var img = new Image();
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
        }else{
          context.drawImage(img, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
        };
    };
    img.src = fr.result;
  };
  fr.readAsDataURL(this.files[0]);
});

//////////////////////////// picture download, download the canvas as png

function generateImage() {
  var dataURL = canvas.toDataURL();
  document.getElementById('canvasImg').src = dataURL;
  console.log(dataURL);
}
