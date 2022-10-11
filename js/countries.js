const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = countries => {
    const countriesContainer = document.getElementById('countries-container');
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.classList.add("country");
        countryDiv.innerHTML = `
            <h3>Name: ${country.name.common} </h3>
            <h3>Capital: ${country.capital ? country.capital[0] : 'No capital'} </h3>
            <button onclick="loadCountryDetails('${country.cca2}')" > Details </button>
        `
        countriesContainer.appendChild(countryDiv);
    })
}

const loadCountryDetails = code => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetails(data[0]))
}

const displayCountryDetails = country => {
    console.log(country);
    const countryDetails = document.getElementById('country-detail');
    countryDetails.innerHTML = `
        <h2>Details: ${country.name.common}</h2>
        <img src ="${country.flags.png}">
    `
} 

loadCountries(); 