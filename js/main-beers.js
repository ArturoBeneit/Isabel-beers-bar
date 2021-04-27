
window.addEventListener('DOMContentLoaded', ()=>{
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $('head').append('<link rel="stylesheet" href="../css/mobile.css" type="text/css" />');
  }

  $('#countries-filter').hide();
  addCountries();
  $('input[type=radio][name=filter]').value = 'all';
  $('input[type=radio][name=filter]').change(checkCountries);
  $('input[type=radio][name=country]').change(showBeers);

  showBeers(false);
});

function checkCountries() {
  if (this.value === 'countries') {
    $('#countries-filter').show();
  }

  if (this.value === 'all') {
    $('#countries-filter').hide();
    $('input[type=radio][name=country]').prop('checked', false);
    showBeers(false);
  }
}


function showBeers(ctry = true) {
  let beers;
  if(ctry){
    beers = getBeersHTML(this.id);
  }else{
    beers = getBeersHTML();
  }

  if(document.getElementById('all-beers') == undefined){
    $('main').append(beers);
  }else{
    $('main').children().last().remove();
    $('main').append(beers);
  }
}
