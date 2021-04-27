function addCountries() {
  let countries = data.map(c => c.name);

  let html = '';
  for (let name of countries){
    html += `<label>
              <input id="${name}" name="country" type="radio">
              <span class="check"></span>
              <span>${name}</span>
             </label>`;
  }

  $('#countries-filter').html(html);
}

function getBeersHTML(country = 'all'){
  data.sort((c1,c2) =>{
    if(c1.name<c2.name) return -1;
    if(c1.name>c2.name) return  1;
    return 0;
  });

  let all_beers = document.createElement('div');
  all_beers.id = 'all-beers';

  let html = '';

  if (country === 'all') {
    data.forEach((country) => {
      let country_html = drawCountry(country.name);
      all_beers.appendChild(country_html);
    });
  }else{
    let country_html = drawCountry(country);
    all_beers.appendChild(country_html);
  }

  function drawCountry(country_name) {
    country_obj = data.filter((country) => country.name == country_name)[0];

    country_div = document.createElement('div');
    country_div.className = 'country';

    let html = `<h1>${country_obj.name}</h1>
                <img src='../${country_obj.img}'>`;

    country_obj.beers.forEach((beer) => {
      html += `<div class='beer'>
                <img src='../img/Cervezas/Alemanas/paulaner-hefe.png'>
                <h4>${beer.name}</h4>
               </div>`
    });



    country_div.innerHTML = html;

    return country_div;
  }

  return all_beers;
}



// function beers2Html_orderedByDegrees() {
//   BEERS.sort((b1,b2) => b1.grados - b2.grados);
//
//   let all_beers = document.createElement('div');
//   all_beers.id = 'all-beers';
//
//   BEERS.forEach((cerveza) => {
//     addBeer(all_beers,cerveza);
//   });
//
//   return all_beers;
// }
