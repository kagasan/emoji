var canvas;
var ctx;
var img = new Image();
var imgFlg = 0;
var bgc = "";
var ftc = "";

window.onload=function(){
    canvas = document.createElement('canvas');
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
    var lastStr2 = "";
    var lastBold = true;
    function loop(){
        var curStr = document.forms.src.str.value;
        var curStr2 = document.forms.src.str2.value;
        var curBgc = document.forms.colorForm.bgc.value;
        var curFtc = document.forms.colorForm.ftc.value;
        var curBold = document.forms.colorForm.bold.checked;
        if(curStr==lastStr && curStr2==lastStr2 && curBgc==bgc && curFtc==ftc && curBold==lastBold)return;
        lastStr=curStr;
        lastStr2=curStr2;
        bgc = curBgc;
        ftc = curFtc;
        lastBold = curBold;
        ctx.fillStyle = bgc;
        ctx.fillRect(0, 0, 129, 129);
        if(lastStr2==""){
            ctx.font = "128px Unknown Font";
            if(lastBold){
                ctx.font = "bold 128px Unknown Font";
            }
            ctx.fillStyle = ftc;
            ctx.fillText(curStr,4,110,120);
        }
        else{
            ctx.font = "62px Unknown Font";
            if(lastBold){
                ctx.font = "bold 128px Unknown Font";
            }
            ctx.fillStyle = ftc;
            ctx.fillText(curStr,4,57,120);
            ctx.fillText(curStr2,4,112,120);
        }
        document.getElementById("output").innerHTML = "<img src='" + canvas.toDataURL() + "'></br>";
    }
    setInterval(loop,1000);
}

function fromImg(){
    ctx.fillStyle = bgc;
    ctx.fillRect(0, 0, 129, 129);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    document.getElementById("output").innerHTML = "<img src='" + canvas.toDataURL() + "'></br>";
}