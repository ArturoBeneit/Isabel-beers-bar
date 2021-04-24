window.addEventListener('DOMContentLoaded', ()=>{
  $('#countries-filter').hide();
  $('input[type=radio][name=filter]').value = 'all';
  $('input[type=radio][name=filter]').change(checkCountries);
  $('input[type=radio][name=country]').change(showCountry);
  checkCountries();
  showCountry(false);
});

function checkCountries() {
  if (this.value === 'countries') {
    $('#countries-filter').show();
  }
  if (this.value === 'all') {
    $('#countries-filter').hide();
    $('input[type=radio][name=country]').prop('checked', false);
    showCountry(false);
  }
}


function showCountry(ctr = true) {
  let beers;
  if(ctr){
    beers = beersFilterByCountry(this.id)
  }else{
    beers = beers2Html_orderByCountry();
  }

  if(document.getElementById('all-beers') == undefined){
    $('main').append(beers);
  }else{
    $('main').children().last().remove();
    $('main').append(beers);
  }
}

function beers2Html_orderByCountry() {
  BEERS.sort((b1,b2) =>{
    if(b1.pais<b2.pais) return -1;
    if(b1.pais>b2.pais) return  1;
    return 0;
  });

  let all_beers = document.createElement('div');
  all_beers.id = 'all-beers';
  let div_pais = document.createElement('div');
  div_pais.className = 'country';

  BEERS.forEach((cerveza,idx) => {
    let prev = BEERS[idx-1];

    if(prev !== undefined && cerveza.pais === prev.pais){
      addBeer(div_pais,cerveza);
    }else{
      let h1 = document.createElement('h1');
      h1.innerHTML = cerveza.pais;

      div_pais.appendChild(h1);
      all_beers.appendChild(div_pais);

      addBeer(div_pais,cerveza);
    }
  });

  return all_beers;
}

function beers2Html_orderByDegrees() {
  BEERS.sort((b1,b2) => b1.grados - b2.grados);

  let all_beers = document.createElement('div');
  all_beers.id = 'all-beers';

  BEERS.forEach((cerveza) => {
    addBeer(all_beers,cerveza);
  });

  return all_beers;
}

function addBeer(div,cerveza) {
  let beer_div = document.createElement('div');
  beer_div.className = 'beer';
  let h3 = document.createElement('h3');
  h3.innerHTML = cerveza.nombre + ' ' + cerveza.grados + ' grados';
  beer_div.appendChild(h3);

  div.appendChild(beer_div);
}


function beersFilterByCountry(country) {
  let countryBeers = BEERS.filter((b) => b.pais == country);

  let all_beers = document.createElement('div');
  all_beers.id = 'all-beers';

  countryBeers.forEach((cerveza) => {
    addBeer(all_beers,cerveza);
  });

  return all_beers;
}
