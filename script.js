var canvas;
var ctx;
var img = new Image();
var imgFlg = 0;

window.onload=function(){
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    canvas.height=128;
    canvas.width=128;

    img.addEventListener("load", function(){
        if(imgFlg){
            imgFlg=0;
            fromImg();
        }
    }, false);
    document.getElementById("selectfile").addEventListener("change",function(evt){
        var file = evt.target.files;
        var reader = new FileReader();
        reader.readAsDataURL(file[0]);
        reader.onload = function(){
            imgFlg = 1;
            img.src = reader.result;
        }
    }, false);
    var lastStr = "";
    function loop(){
        var curStr = document.forms.src.str.value;
        if(curStr==lastStr)return;
        lastStr=curStr;
        ctx.fillStyle = "rgb(255, 255, 255)";
        ctx.fillRect(0, 0, 129, 129);
        ctx.font = "128px Unknown Font";
        ctx.fillStyle = "rgb(0, 0, 0)";
        ctx.fillText(curStr,4,110,120);
    }
    setInterval(loop,1000);
}

function fromImg(){
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
}