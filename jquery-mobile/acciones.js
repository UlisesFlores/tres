//JavaScript


$(document).ready(function(e){
document.addEventListener("deviceready"(){

$('#beep').tap(function)(){
navigator.notification.beep(1);
});//tap beep

$('#vibrar').tap(function(){
navigator.notification.vibrate(1000);
});//tap vibrar

},false); //deviceready
});//read