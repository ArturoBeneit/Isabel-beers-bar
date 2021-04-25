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
  img_pais = document.createElement('img');

  BEERS.forEach((cerveza,idx) => {
    let prev = BEERS[idx-1];

    if(prev !== undefined && cerveza.pais === prev.pais){
      addBeer(div_pais,cerveza);
    }else{
      if(div_pais.innerHTML !== '') {
        all_beers.appendChild(div_pais);
        div_pais = document.createElement('div');
        div_pais.className = 'country';
        img_pais = document.createElement('img');
      }
      img_pais.src = cerveza.flagSrc;
      div_pais.appendChild(img_pais);

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

  let html =`<img src='${cerveza.enlace}'>
             <h3>${cerveza.nombre} ${cerveza.grados} grados</h3>`;

  beer_div.innerHTML += html;

  div.appendChild(beer_div);
}


function beersFilteredByCountry(country) {
  let countryBeers = BEERS.filter((b) => b.pais == country);
  let all_beers = document.createElement('div');
  all_beers.id = 'all-beers';
  country_div = document.createElement('div');
  country_div.className = 'country';
  country_div.innerHTML = `<img src='${countryBeers[0].flagSrc}'>
                           <h1> ${country} </h1>`;

  countryBeers.forEach((cerveza) => {
    addBeer(country_div,cerveza);
  });

  all_beers.appendChild(country_div);
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
