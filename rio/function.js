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
        var shorter_side = Math.min(img.width, img.height);
        console.log(shorter_side); //800
        var r = shorter_side/canvas.width; 
        console.log(r); //0.625
        console.log(img.width); //1280
        console.log(img.height); //800
        old_width = img.width;
        old_height = img.height;
        new_width = img.width * r;
        new_height = img.height * r;
        console.log(img.width); //800
        console.log(img.height); //500
        console.log(canvas.width); //500
        if(old_width > old_height){
            var sourceX = (old_width - canvas.width*r)/2; 
            var sourceY = 0;
            var sourceWidth = canvas.width*r;
            var sourceHeight = canvas.height*r;
            var destWidth = canvas.width;
            var destHeight = canvas.height;         
            var destX = 0;
            var destY = 0;
        }else{
            var sourceX = 0; 
            var sourceY = (old_height - canvas.height*r)/2;
            var sourceWidth = canvas.width*r;
            var sourceHeight = canvas.height*r;
            var destWidth = canvas.width;
            var destHeight = canvas.height;            
            var destX = 0;
            var destY = 0;  
        }
        
        console.log(sourceX);//240
        console.log(sourceY);//150
        console.log(sourceWidth);//500
        console.log(sourceHeight);//500
        console.log(destX);//0
        console.log(destY);//0
        console.log(destWidth);//500
        console.log(destHeight);//500
        context.drawImage(img, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
        //if(img.width < canvas.width || img.height < canvas.height ){
        //    context.drawImage(img,0,0,500,500);
        //}else{context.drawImage(img, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);};
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
