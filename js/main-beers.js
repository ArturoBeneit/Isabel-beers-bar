
window.addEventListener('DOMContentLoaded', ()=>{
  $('#countries-filter').hide();
  addCountries();
  $('input[type=radio][name=filter]').value = 'all';
  $('input[type=radio][name=filter]').change(checkCountries);
  $('input[type=radio][name=country]').change(showBeers);

  checkCountries();
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


function showBeers(ctr = true) {
  let beers;
  if(ctr){
    beers = beersFilteredByCountry(this.id);
  }else{
    beers = beers2Html_orderedByCountry();
  }

  if(document.getElementById('all-beers') == undefined){
    $('main').append(beers);
  }else{
    $('main').children().last().remove();
    $('main').append(beers);
  }
}
