import 'regenerator-runtime/runtime';
import countryCardTpl from './templates/country.hbs';
import countriesListTpl from './templates/countries.hbs';
import _debounce from 'lodash.debounce';
import API from './js/api-service';
import getRefs from './js/get-refs';
import toastify from './js/toastify';

import './sass/main.scss';

const refs = getRefs();

refs.input.addEventListener('input', _debounce(onCountryInput, 500));

// function onCountryInput(e) {
//   clearCountryInput();
//   if (!e.target.value) {
//     return;
//   }
//   API.fetchCountryByName(e.target.value)
//     .then(country => {
//       if (country.length < 2) {
//         renderCountryCard(country);
//         toastify.onSuccess(country);
//       } else if (country.length < 10 && country.length > 1) {
//         renderCountriesList(country);
//       } else {
//         toastify.onFetchMore(country);
//       }
//     })
//     .catch(toastify.onFetchError);
// }

async function onCountryInput(e) {
  try {
    clearCountryInput();
    if (!e.target.value) {
      return;
    }
    const country = await API.fetchCountryByName(e.target.value);
    if (country.length < 2) {
      renderCountryCard(country);
      toastify.onSuccess(country);
      return;
    } else if (country.length < 10 && country.length > 1) {
      renderCountriesList(country);
      return;
    } else if (country.length > 10) {
      toastify.onFetchMore(country);
      return;
    } else {
      toastify.onFetchError();
      return;
    }
  } catch (error) {
    console.log(error);
  }
}

function renderCountryCard(country) {
  const markup = countryCardTpl(country);
  refs.country.insertAdjacentHTML('beforeend', markup);
}

function renderCountriesList(countries) {
  const markup = countriesListTpl(countries);
  refs.country.insertAdjacentHTML('beforeend', markup);
}

function clearCountryInput() {
  refs.country.innerHTML = '';
}
