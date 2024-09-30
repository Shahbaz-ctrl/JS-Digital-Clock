
var hoursSp =  document.getElementById("hours");
var minSp =  document.getElementById("min");
var secSp =  document.getElementById("sec");
var durationsp = document.getElementById("duration")

setInterval(()=>{
    
    var time = new Date();
    hoursSp.innerText = time.getHours()
    minSp.innerText = time.getMinutes()
    secSp.innerText = time.getSeconds()
var count = 12;
if(time.getHours()>12){
    hoursSp.innerText = time.getHours() - count;
    count++;
}

if(time.getHours()>24 && time.getHours()<12){
    document.getElementById("duration").innerText = 'pm'
}else{
    document.getElementById("duration").innerText = 'am'
}

}, 1000)