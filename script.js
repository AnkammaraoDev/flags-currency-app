const url = "https://countriesnow.space/api/v0.1/countries/info?returns=unicode,currency,flag,dialCode";

const Handler = async () => {
  const response = await fetch(url);
  const newData = await response.json();

  // List of countries you want
  const countryNames = [
    "Germany",
    "United States",
    "Brazil",
    "Iceland",
    "Afghanistan",
    "Aland Islands",
    "Albania",
    "Algeria"
  ];

  // Filter the data for only these countries
  const selectedCountries = newData.data.filter(country =>
    countryNames.some(name => country.name.toLowerCase() === name.toLowerCase())
  );

  // Log only the details you need
  selectedCountries.forEach(country => {
    console.log({
      name: country.name,
      currency: country.currency,
      dialCode: country.dialCode,
      flag: country.flag
    });
  });
};

Handler();


let isDarkMode = false; // keep track of theme

const DarkTheme = function() {
  const body = document.querySelector("body");
  const header = document.querySelector(".header");
  const toggleText = document.querySelector(".darktheme-text");

  if (!isDarkMode) {
    // Apply Dark Mode
    body.style.backgroundColor = "#121212";
    body.style.color = "white";
    header.style.backgroundColor = "#1f1f1f";
    toggleText.textContent = "☀ Light Mode"; // change text + symbol
    isDarkMode = true;
  } else {
    // Apply Light Mode
    body.style.backgroundColor = "white";
    body.style.color = "black";
    header.style.backgroundColor = "white";
    toggleText.textContent = "🌙 Dark Mode"; // change text + symbol
    isDarkMode = false;
  }
};

const filterDropdown = document.querySelector('.currencyFilter');

filterDropdown.addEventListener('change', () => {
  const selectedCurrency = filterDropdown.value;
  const cards = document.querySelectorAll('.card'); // Always get current cards

  cards.forEach(card => {
    if (!selectedCurrency || card.dataset.currency === selectedCurrency) {
      card.style.display = "block"; // Show matching cards
    } else {
      card.style.display = "none"; // Hide non-matching cards
    }
  });
});


const searchBox = document.querySelector('.searchbar');
const cards = document.querySelectorAll('.card');

searchBox.addEventListener('input', () => {
  const searchTerm = searchBox.value.trim().toLowerCase();

  cards.forEach(card => {
    const countryElement = card.querySelector('.card-title');
    if (!countryElement) return;

    const countryName = countryElement.textContent.trim().toLowerCase();
    // Check if the country name starts with the search term or if the search term is empty
    if (countryName.startsWith(searchTerm) || searchTerm === '') {
      card.style.display = ''; 
    } else {
      card.style.display = 'none'; 
    }
  });
});
