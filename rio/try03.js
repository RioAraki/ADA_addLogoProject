$('input').change(function() {
    
    var fr = new FileReader;
    
    fr.onload = function() {
        var img = new Image;
        img.onload = function() {
            var c=document.getElementById("cvs");
            var ctx=c.getContext("2d");
            ctx.drawImage(img,0,0,200,180);       
        }
        img.src = fr.result;
                
    };
    
    fr.readAsDataURL(this.files[0]);
    
});