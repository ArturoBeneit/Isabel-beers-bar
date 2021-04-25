function beers2Html_orderedByCountry() {
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
      if(div_pais.innerHTML !== '') {
        all_beers.appendChild(div_pais);
        div_pais = document.createElement('div');
        div_pais.className = 'country';
      }

      let h1 = document.createElement('h1');
      h1.innerHTML = cerveza.pais;

      div_pais.appendChild(h1);
      addBeer(div_pais,cerveza);
      all_beers.appendChild(div_pais);
    }
  });

  return all_beers;
}


function beers2Html_orderedByDegrees() {
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

  let html =
  `
  <img src='${cerveza.enlace}'>
  <h3>${cerveza.nombre} ${cerveza.grados} grados</h3>
  `
  // let h3 = document.createElement('h3');
  // h3.innerHTML = cerveza.nombre + ' ' + cerveza.grados + ' grados';
  beer_div.innerHTML += html;

  div.appendChild(beer_div);
}


function beersFilteredByCountry(country) {
  let countryBeers = BEERS.filter((b) => b.pais == country);

  let all_beers = document.createElement('div');
  all_beers.id = 'all-beers';
  all_beers.innerHTML = `<h1> ${country} </h1>`;

  countryBeers.forEach((cerveza) => {
    addBeer(all_beers,cerveza);
  });

  return all_beers;
}

function addCountries() {
  let countries = new Set();
  BEERS.forEach((beer) => {
    countries.add(beer.pais)
  });

  let html = '';
  for (let item of countries){
    html += `<label>
              <input id="${item}" name="country" type="radio">
              <span class="check"></span>
              <span>${item}</span>
            </label>`;
  }

  $('#countries-filter').html(html);
}
