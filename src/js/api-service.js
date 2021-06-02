const BASE_URL = 'https://restcountries.eu/rest/v2';

// function fetchCountryByName(countryName) {
//   return fetch(`${BASE_URL}/name/${countryName}`).then(response => {
//     // return response.json();
//     if (response.ok) return response.json();
//     throw new Error('Error fetching data');
//   });
// }

async function fetchCountryByName(countryName) {
  const response = await fetch(`${BASE_URL}/name/${countryName}`);
  const newCountry = await response.json();

  return newCountry;
}

export default { fetchCountryByName };
