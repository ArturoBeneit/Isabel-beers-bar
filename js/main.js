window.addEventListener('DOMContentLoaded', ()=>{
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $('head').append('<link rel="stylesheet" href="css/mobile.css" type="text/css" />');
  }
});
