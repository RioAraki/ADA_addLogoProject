var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var logo = new Image();
var logo1 = new Image();
var logo2 = new Image();
var logo3 = new Image();
var logo4 = new Image();
var logo5 = new Image();
var logo6 = new Image();
var logo7 = new Image();
var logo8 = new Image();
var logo9 = new Image();
var logo10 = new Image();
var logo11 = new Image();
var logo12 = new Image();
var background = new Image();
var background1 = new Image();
var background2 = new Image();
var background3 = new Image();
var background4 = new Image();
var background5 = new Image();
var background6 = new Image();
var background7 = new Image();
var background8 = new Image();
var background9 = new Image();
var background10 = new Image();
var background11 = new Image();
var background12 = new Image();


/////////////////////////// add logo functions
function addLogo() {
  context.drawImage(logo,0,0);
}

function addBackground() {
  context.drawImage(background,0,0);
}
function addLogo_anonymous() {
  context.drawImage(logo1,0,0);
}

function addBackground_anonymous() {
  context.drawImage(background1,0,0);
}
function addLogo_blue() {
  context.drawImage(logo2,0,0);
}

function addBackground_blue() {
  context.drawImage(background2,0,0);
}

function addLogo_coffee() {
  context.drawImage(logo3,0,0);
}

function addBackground_coffee() {
  context.drawImage(background3,0,0);
}

function addLogo_cyanStone() {
  context.drawImage(logo4,0,0);
}

function addBackground_cyanStone() {
  context.drawImage(background4,0,0);
}

function addLogo_greyWhite() {
  context.drawImage(logo5,0,0);
}

function addBackground_greyWhite() {
  context.drawImage(background5,0,0);
}

function addLogo_hehe() {
  context.drawImage(logo6,0,0);
}

function addBackground_hehe() {
  context.drawImage(background6,0,0);
}

function addLogo_izumi() {
  context.drawImage(logo7,0,0);
}

function addBackground_izumi() {
  context.drawImage(background7,0,0);
}

function addLogo_joy() {
  context.drawImage(logo8,0,0);
}

function addBackground_joy() {
  context.drawImage(background8,0,0);
}

function addLogo_light_purple() {
  context.drawImage(logo9,0,0);
}

function addBackground_light_purple() {
  context.drawImage(background9,0,0);
}

function addLogo_sakura() {
  context.drawImage(logo10,0,0);
}

function addBackground_sakura() {
  context.drawImage(background10,0,0);
}

function addLogo_tea() {
  context.drawImage(logo11,0,0);
}

function addBackground_tea() {
  context.drawImage(background11,0,0);
}

function addLogo_winnie() {
  context.drawImage(logo12,0,0);
}

function addBackground_winnie() {
  context.drawImage(background12,0,0);
}




logo.src = "https://rioaraki.github.io/addLogo/logo.svg";
background.src = "https://rioaraki.github.io/addLogo/background.svg";
logo1.src = "https://hesterg.github.io/logo_anonymous.svg";
background1.src = "https://hesterg.github.io/background_anonymous.svg";
logo2.src = "https://hesterg.github.io/logo_blue.svg";
background2.src = "https://hesterg.github.io/background_blue.svg";
logo3.src = "https://hesterg.github.io/logo_coffee.svg";
background3.src = "https://hesterg.github.io/background_coffee.svg";
logo4.src = "https://hesterg.github.io/logo_cyanStone.svg";
background4.src = "https://hesterg.github.io/background_cyanStone.svg";
logo5.src = "https://hesterg.github.io/logo_greyWhite.svg";
background5.src = "https://hesterg.github.io/background_greyWhite.svg";
logo6.src = "https://hesterg.github.io/logo_hehe.svg";
background6.src = "https://hesterg.github.io/background_hehe.svg";
logo7.src = "https://hesterg.github.io/logo_izumi.svg";
background7.src = "https://hesterg.github.io/background_izumi.svg";
logo8.src = "https://hesterg.github.io/logo_joy.svg";
background8.src = "https://hesterg.github.io/background_joy.svg";
logo9.src = "https://hesterg.github.io/logo_lightpurple.svg";
background9.src = "https://hesterg.github.io/background_lightpurple.svg";
logo10.src = "https://hesterg.github.io/logo_sakura.svg";
background10.src = "https://hesterg.github.io/background_sakura.svg";
logo11.src = "https://hesterg.github.io/logo_tea.svg";
background11.src = "https://hesterg.github.io/background_tea.svg";
logo12.src = "https://hesterg.github.io/logo_winnie.svg";
background12.src = "https://hesterg.github.io/background_winnie.svg";

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
        console.log(img.width); //800
        console.log(img.height); //500
        console.log(canvas.width); //500
        if(old_width > old_height){
            var sourceX = (old_width - canvas.width*r)/2; 
            var sourceY = 0;
        }else{
            var sourceX = 0; 
            var sourceY = (old_height - canvas.height*r)/2;
        }
        var sourceWidth = canvas.width*r;
        var sourceHeight = canvas.height*r;
        var destWidth = canvas.width;
        var destHeight = canvas.height;         
        var destX = 0;
        var destY = 0;
        
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
