window.addEventListener('DOMContentLoaded', ()=>{
  detectMobile();
});

function detectMobile(){
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $('body').css("font-size", "150%");
    $('.filters').css("font-size", "1.3em");
 }else{
    $('body').css("font-size", "120%");
 }
}
